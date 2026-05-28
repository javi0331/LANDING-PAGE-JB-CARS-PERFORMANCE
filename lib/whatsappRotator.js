/**
 * JB Cars Performance — WhatsApp Line Rotator
 *
 * Lógica de distribución de contactos entrantes entre múltiples líneas.
 * Estrategia: round-robin persistido en localStorage + validación de horario.
 *
 * El usuario final nunca ve ni configura nada — el sistema rota solo.
 */

import { WHATSAPP_LINES, WHATSAPP_DEFAULT_MESSAGE } from './constants';

const STORAGE_KEY = 'jbcars_wa_turn';

/**
 * Obtiene el índice del turno actual desde localStorage.
 * Si no existe, inicia en 0.
 */
function getCurrentTurnIndex() {
  if (typeof window === 'undefined') return 0; // SSR guard
  const stored = localStorage.getItem(STORAGE_KEY);
  const index  = parseInt(stored, 10);
  return isNaN(index) ? 0 : index;
}

/**
 * Avanza el turno al siguiente índice y lo persiste.
 */
function advanceTurn(currentIndex, totalLines) {
  const next = (currentIndex + 1) % totalLines;
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, String(next));
  }
  return next;
}

/**
 * Verifica si una línea está dentro de su horario de atención.
 * @param {{ start: number, end: number }} activeHours
 * @returns {boolean}
 */
function isLineActive(activeHours) {
  if (!activeHours) return true;
  const now  = new Date();
  const hour = now.getHours();
  return hour >= activeHours.start && hour < activeHours.end;
}

/**
 * Filtra las líneas activas según horario.
 * Si ninguna está activa (fuera de horario), devuelve todas (sin restricción).
 */
function getActiveLines() {
  const active = WHATSAPP_LINES.filter((line) => isLineActive(line.activeHours));
  return active.length > 0 ? active : WHATSAPP_LINES;
}

/**
 * Devuelve la línea que le toca en esta visita y construye la URL de WhatsApp.
 *
 * @param {string} [customMessage] - Mensaje personalizado (ya codificado con encodeURIComponent)
 * @returns {{ line: object, url: string }}
 */
export function getNextWhatsAppLine(customMessage) {
  const activeLines = getActiveLines();
  const totalLines  = activeLines.length;

  if (totalLines === 0) {
    return { line: WHATSAPP_LINES[0], url: buildWhatsAppUrl(WHATSAPP_LINES[0].number, customMessage) };
  }

  const currentIndex = getCurrentTurnIndex() % totalLines;
  const selectedLine = activeLines[currentIndex];

  // Avanzar turno para la próxima visita
  advanceTurn(currentIndex, totalLines);

  const url = buildWhatsAppUrl(selectedLine.number, customMessage);
  return { line: selectedLine, url };
}

/**
 * Construye la URL de WhatsApp con número y mensaje.
 * @param {string} number  - Número en formato internacional sin '+'
 * @param {string} [message] - Mensaje codificado (opcional)
 * @returns {string}
 */
function buildWhatsAppUrl(number, message) {
  const msg = message ?? WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${number}?text=${msg}`;
}

/**
 * Hook/función utilitaria para abrir WhatsApp directamente.
 * Maneja el click del botón flotante.
 */
export function openWhatsApp(customMessage) {
  const { url } = getNextWhatsAppLine(customMessage);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

/**
 * Resetea el turno manualmente (útil para testing o admin).
 */
export function resetWhatsAppTurn() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
}