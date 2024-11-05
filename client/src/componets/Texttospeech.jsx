import React, { useState } from 'react';

export default function  () {
        const [text, setText] = useState('');
        const [isSpeaking, setIsSpeaking] = useState(false);
      
        const handleTextChange = (event) => {
          setText(event.target.value);
        };
      
        const speakText = () => {
          if (text !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            setIsSpeaking(true);
            utterance.onend = () => {
              setIsSpeaking(false);
            };
            window.speechSynthesis.speak(utterance);
          }
        };
      
        const stopSpeaking = () => {
          window.speechSynthesis.cancel();
          setIsSpeaking(false);
        };
  return (
    < > 
    <div className="tts-container">
      <h1>Text to Speech Generator</h1>
      <textarea
        className="tts-input"
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here..."
        rows="6"
      ></textarea>
      <div className="tts-controls">
        <button className="tts-btn speak-btn" onClick={speakText} disabled={isSpeaking}>
          {isSpeaking ? 'Speaking...' : 'Speak'}
        </button>
        <button className="tts-btn stop-btn" onClick={stopSpeaking} disabled={!isSpeaking}>
          Stop
        </button>
      </div>
    </div>
    
    
    </ >
  )
}
