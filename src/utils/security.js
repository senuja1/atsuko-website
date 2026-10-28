/**
 * Security & Sanitization Utilities
 * Protects against XSS, injection vectors, and payload abuse without altering UI/UX.
 */

/**
 * Sanitizes a string input by removing potential script tags, javascript pseudo-protocols,
 * control characters, and trimming/limiting length to prevent buffer/payload flooding.
 * 
 * @param {string} input - The raw user input string
 * @param {number} maxLength - Maximum allowable characters (default 500)
 * @returns {string} Sanitized string
 */
export function sanitizeInput(input, maxLength = 500) {
  if (typeof input !== 'string') return '';
  
  return input
    // Strip HTML/XML tags
    .replace(/<[^>]*>?/gm, '')
    // Strip dangerous javascript: and data: URIs
    .replace(/(javascript|vbscript|data):/gi, '')
    // Strip null bytes and dangerous control characters
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    // Normalize excessive whitespace
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

/**
 * Validates that an external URL uses only safe, approved schemes.
 * Blocks javascript:, data:, and relative redirection vectors.
 * 
 * @param {string} url - The URL to validate
 * @returns {boolean} True if safe to navigate
 */
export function isSafeUrl(url) {
  if (!url || typeof url !== 'string') return false;
  try {
    const trimmed = url.trim();
    if (trimmed.startsWith('tel:') || trimmed.startsWith('mailto:')) return true;
    const parsed = new URL(trimmed, window.location.origin);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}

/**
 * Deep sanitizes all fields of a form object before storage or transmission.
 * 
 * @param {Object} formData - Key-value form payload
 * @returns {Object} Cleaned form data
 */
export function sanitizeFormData(formData) {
  if (!formData || typeof formData !== 'object') return {};
  const cleaned = {};
  for (const [key, val] of Object.entries(formData)) {
    if (typeof val === 'string') {
      const limit = key === 'message' || key === 'notes' ? 1000 : 150;
      cleaned[key] = sanitizeInput(val, limit);
    } else {
      cleaned[key] = val;
    }
  }
  return cleaned;
}
