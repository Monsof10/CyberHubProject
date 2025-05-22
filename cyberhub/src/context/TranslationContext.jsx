import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [apiKey, setApiKey] = useState('');

  const translatePage = async (elements, targetLang) => {
    if (!apiKey) {
      console.error('Google Translate API key is not set');
      return;
    }

    try {
      // Get all text nodes in the page
      const textNodes = [];
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function(node) {
            // Skip script and style elements
            if (
              node.parentElement.tagName === 'SCRIPT' ||
              node.parentElement.tagName === 'STYLE'
            ) {
              return NodeFilter.FILTER_REJECT;
            }
            // Accept non-empty text nodes
            return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
          }
        }
      );

      while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
      }

      // Batch translate text content
      const textsToTranslate = textNodes.map(node => node.textContent.trim());
      
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        null,
        {
          params: {
            q: textsToTranslate,
            target: targetLang,
            key: apiKey
          }
        }
      );

      if (response.data?.data?.translations) {
        // Update text nodes with translations
        response.data.data.translations.forEach((translation, index) => {
          if (textNodes[index]) {
            textNodes[index].textContent = translation.translatedText;
          }
        });
      }
    } catch (error) {
      console.error('Translation error:', error.response?.data || error);
    }
  };

  const value = {
    apiKey,
    setApiKey,
    translatePage
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
