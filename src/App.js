import React from 'react';
import Paragraph from './components/Paragraph';

export default function App() {
  const content = 'Hello, my name is Bruno Krebs! What is your name?';

  function toggleBold() {

  }

  return (
    <Paragraph toggleBold={toggleBold} content={content.split('')} />
  );
}
