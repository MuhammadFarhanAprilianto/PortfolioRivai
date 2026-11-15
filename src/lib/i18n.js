export function isEnglish(lang) {
  return lang === 'en';
}

/**
 * Universal bilingual text resolver
 * Supports strings, numbers, or objects with { en, id_lang, id }
 */
export function t(val, lang = 'id_lang') {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return String(val);
  if (typeof val === 'object' && !Array.isArray(val)) {
    const isEn = lang === 'en';
    if (isEn) {
      return val.en ?? val.id_lang ?? val.id ?? '';
    } else {
      return val.id_lang ?? val.id ?? val.en ?? '';
    }
  }
  return String(val);
}

/**
 * Universal bilingual array resolver
 * Supports arrays directly, or objects with { en: [...], id_lang: [...] }
 */
export function tArr(val, lang = 'id_lang') {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  if (typeof val === 'object') {
    const isEn = lang === 'en';
    const list = isEn ? (val.en || val.id_lang || val.id) : (val.id_lang || val.id || val.en);
    if (Array.isArray(list)) return list;
  }
  return [];
}
