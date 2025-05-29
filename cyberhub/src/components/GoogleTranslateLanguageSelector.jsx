import React, { useState } from 'react';
import axios from 'axios';

const GoogleTranslateLanguageSelector = () => {
  const [loading, setLoading] = useState(false);
  // API key will be added later
  const apiKey = 'AIzaSyCkXhnxO00R8u44Ym-_6V3DtWHlFIchIxA';

  const translatePage = async (targetLang) => {
    if (!apiKey) {
      alert('Translation service is currently unavailable');
      return;
    }

    setLoading(true);
    try {
      // Get all text nodes in the page
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            if (
              node.parentElement.tagName === 'SCRIPT' ||
              node.parentElement.tagName === 'STYLE' ||
              !node.textContent.trim()
            ) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      const textNodes = [];
      const textsToTranslate = [];
      
      while (walker.nextNode()) {
        const node = walker.currentNode;
        const text = node.textContent.trim();
        if (text) {
          textNodes.push(node);
          textsToTranslate.push(text);
        }
      }

      // Batch translate in chunks of 100 (API limit)
      const chunkSize = 100;
      for (let i = 0; i < textsToTranslate.length; i += chunkSize) {
        const chunk = textsToTranslate.slice(i, i + chunkSize);
        const response = await axios.post(
          `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
          {
            q: chunk,
            target: targetLang
          }
        );

        if (response.data?.data?.translations) {
          response.data.data.translations.forEach((translation, index) => {
            const nodeIndex = i + index;
            if (textNodes[nodeIndex]) {
              textNodes[nodeIndex].textContent = translation.translatedText;
            }
          });
        }
      }
    } catch (error) {
      console.error('Translation error:', error.response?.data || error);
      const errorMessage = error.response?.data?.error?.message || 'Translation failed. Please try again later.';
      alert(`Translation failed: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="google-translate-selector" style={{ backgroundColor: '#001f3f', padding: '8px 12px', borderRadius: '6px', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
      <select
        onChange={(e) => translatePage(e.target.value)}
        disabled={loading}
        style={{
          padding: '8px 12px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#001f3f',
          color: 'white',
          cursor: 'pointer',
          fontSize: '14px',
          outline: 'none',
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none'
        }}
      >
        <option value="" style={{ color: '#001f3f' }}>🌐 Select Language</option>
        <option value="en">🇺🇸 English</option>
        <option value="tr">🇹🇷 Turkish (Türkçe)</option>
        <option value="ar">🇸🇦 Arabic (العربية)</option>
        <option value="es">🇪🇸 Spanish (Español)</option>
        <option value="fr">🇫🇷 French (Français)</option>
        <option value="de">🇩🇪 German (Deutsch)</option>
        <option value="zh">🇨🇳 Chinese (中文)</option>
        <option value="ja">🇯🇵 Japanese (日本語)</option>
        <option value="ko">🇰🇷 Korean (한국어)</option>
        <option value="ru">🇷🇺 Russian (Русский)</option>
      </select>
      {loading && (
        <span style={{ marginLeft: '10px', fontSize: '14px', color: 'white' }}>
          Translating...
        </span>
      )}
    </div>
  );
};

export default GoogleTranslateLanguageSelector;
