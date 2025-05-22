import { DocumentProcessor } from './documentProcessor';
import vectorStore from './vectorStore';
import { getOllamaResponse, initializeKnowledgeBase } from './ollamaUtils';

// Test document processing
async function testDocumentProcessor() {
  console.log('Testing Document Processor...');
  
  const testDoc = {
    content: 'This is a test document with multiple sentences. It should be chunked properly. We want to make sure the chunking works correctly with various lengths of text. This is some additional text to test overlap functionality.',
    source: 'test',
    metadata: { type: 'test' }
  };

  const chunks = DocumentProcessor.processDocument(testDoc);
  console.log('Chunks created:', chunks.length);
  chunks.forEach((chunk, i) => {
    console.log(`\nChunk ${i + 1}:`, chunk);
  });

  return chunks;
}

// Test vector store
async function testVectorStore(chunks) {
  console.log('\nTesting Vector Store...');
  
  try {
    await vectorStore.initialize();
    console.log('Vector store initialized');

    const ids = await vectorStore.addDocuments(chunks);
    console.log('Documents added with IDs:', ids);

    const testQuery = 'test document chunking';
    const results = await vectorStore.queryDocuments(testQuery, 2);
    console.log('\nQuery results for:', testQuery);
    results.forEach((result, i) => {
      console.log(`\nResult ${i + 1}:`, result);
    });
  } catch (error) {
    console.error('Vector store test failed:', error);
  }
}

// Test Ollama integration
async function testOllama() {
  console.log('\nTesting Ollama Integration...');

  try {
    const testDocs = [{
      content: 'SQL injection is a type of cyber attack where malicious SQL code is inserted into application queries.',
      source: 'security_docs',
      metadata: { type: 'definition' }
    }];

    await initializeKnowledgeBase(testDocs);
    console.log('Knowledge base initialized');

    const testQuery = 'What is SQL injection?';
    console.log('\nTesting query:', testQuery);
    const response = await getOllamaResponse(testQuery);
    console.log('Ollama response:', response);
  } catch (error) {
    console.error('Ollama test failed:', error);
  }
}

// Run all tests
async function runTests() {
  console.log('Starting comprehensive tests...\n');
  
  try {
    const chunks = await testDocumentProcessor();
    await testVectorStore(chunks);
    await testOllama();
    console.log('\nAll tests completed successfully!');
  } catch (error) {
    console.error('\nTest suite failed:', error);
  }
}

runTests();
