import React, { useEffect, useState } from 'react';
import { DocumentProcessor } from './documentProcessor';
import vectorStore from './vectorStore';
import { getOllamaResponse, initializeKnowledgeBase } from './ollamaUtils';

const TestRAG = () => {
  const [testResults, setTestResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addResult = (message) => {
    setTestResults(prev => [...prev, message]);
  };

  // Test document processing
  const testDocumentProcessor = async () => {
    addResult('Testing Document Processor...');
    
    const testDoc = {
      content: 'This is a test document with multiple sentences. It should be chunked properly. We want to make sure the chunking works correctly with various lengths of text. This is some additional text to test overlap functionality.',
      source: 'test',
      metadata: { type: 'test' }
    };

    try {
      const chunks = DocumentProcessor.processDocument(testDoc);
      addResult(`Chunks created: ${chunks.length}`);
      chunks.forEach((chunk, i) => {
        addResult(`\nChunk ${i + 1}: ${JSON.stringify(chunk, null, 2)}`);
      });
      return chunks;
    } catch (error) {
      addResult(`Document processor test failed: ${error.message}`);
      throw error;
    }
  };

  // Test vector store
  const testVectorStore = async (chunks) => {
    addResult('\nTesting Vector Store...');
    
    try {
      await vectorStore.initialize();
      addResult('Vector store initialized');

      const ids = await vectorStore.addDocuments(chunks);
      addResult(`Documents added with IDs: ${ids.join(', ')}`);

      const testQuery = 'test document chunking';
      const results = await vectorStore.queryDocuments(testQuery, 2);
      addResult(`\nQuery results for: ${testQuery}`);
      results.forEach((result, i) => {
        addResult(`\nResult ${i + 1}: ${JSON.stringify(result, null, 2)}`);
      });
    } catch (error) {
      addResult(`Vector store test failed: ${error.message}`);
      throw error;
    }
  };

  // Test Ollama integration
  const testOllama = async () => {
    addResult('\nTesting Ollama Integration...');

    try {
      const testDocs = [{
        content: 'SQL injection is a type of cyber attack where malicious SQL code is inserted into application queries.',
        source: 'security_docs',
        metadata: { type: 'definition' }
      }];

      await initializeKnowledgeBase(testDocs);
      addResult('Knowledge base initialized');

      const testQuery = 'What is SQL injection?';
      addResult(`\nTesting query: ${testQuery}`);
      const response = await getOllamaResponse(testQuery);
      addResult(`Ollama response: ${response}`);
    } catch (error) {
      addResult(`Ollama test failed: ${error.message}`);
      throw error;
    }
  };

  // Run all tests
  const runTests = async () => {
    setIsLoading(true);
    addResult('Starting comprehensive tests...\n');
    
    try {
      const chunks = await testDocumentProcessor();
      await testVectorStore(chunks);
      await testOllama();
      addResult('\nAll tests completed successfully!');
    } catch (error) {
      addResult(`\nTest suite failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    runTests();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>RAG System Tests</h2>
      {isLoading && <div>Running tests...</div>}
      <div style={{ whiteSpace: 'pre-wrap', marginTop: '20px' }}>
        {testResults.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
};

export default TestRAG;
