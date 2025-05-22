import axios from 'axios';

const GOOGLE_TRANSLATE_API_URL = 'https://translation.googleapis.com/language/translate/v2';

export async function translateText(apiKey, text, targetLang) {
  try {
    const response = await axios.post(
      \`\${GOOGLE_TRANSLATE_API_URL}?key=\${apiKey}\`,
      {
        q: text,
        target: targetLang,
        format: 'text'
      }
    );
    if (response.data && response.data.data && response.data.data.translations.length > 0) {
      return response.data.data.translations[0].translatedText;
    }
    throw new Error('No translation found');
  } catch (error) {
    console.error('Google Translate API error:', error);
    throw error;
  }
}

