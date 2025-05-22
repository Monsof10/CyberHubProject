
import axios from 'axios';

const OLLAMA_API_URL = 'http://localhost:11434';
const DEFAULT_MODEL = 'llama3';  // Use llama3 or llama2 as requested

export const checkOllamaServerStatus = async () => {
  try {
    const response = await axios.get(`${OLLAMA_API_URL}/api/tags`);
    return true;
  } catch (error) {
    console.error('Ollama server check failed:', error);
    return false;
  }
};

export const getOllamaResponse = async (prompt, model = DEFAULT_MODEL) => {
  try {
    const isServerRunning = await checkOllamaServerStatus();
    if (!isServerRunning) {
      throw new Error('Ollama server is not running');
    }

    // Simple prompt without RAG context
    const optimizedPrompt = `You are a cybersecurity expert. Be concise and direct.
Question: ${prompt}
Provide a brief, focused response.`;

    const response = await axios.post(`${OLLAMA_API_URL}/api/generate`, {
      model: model,
      prompt: optimizedPrompt,
      options: {
        num_predict: 200,
        temperature: 0.7,
        top_k: 40,
        top_p: 0.9,
        repeat_penalty: 1.1
      }
    });

    if (!response.data?.response) {
      throw new Error('No response text found in Ollama response');
    }

    return response.data.response.trim();

  } catch (error) {
    console.error('Error in getOllamaResponse:', {
      error: error,
      message: error.message,
      response: error.response?.data
    });

    if (error.response?.status === 404) {
      throw new Error(`Model ${model} not found`);
    }
    
    if (error.code === 'ECONNREFUSED') {
      throw new Error('Could not connect to Ollama server');
    }

    throw new Error(
      error.response?.data?.error || 
      error.message || 
      'Failed to get response'
    );
  }
};
