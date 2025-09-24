
import React, { useState } from 'react';
import { Verse } from '../data/tianwen';

interface VerseComponentProps {
  verse: Verse;
}

const VerseComponent: React.FC<VerseComponentProps> = ({ verse }) => {
  const [showAnalysis, setShowAnalysis] = useState(false);

  const toggleAnalysis = () => {
    setShowAnalysis(!showAnalysis);
  };

  return (
    <div className="verse">
      <div 
        className={`verse-line ${showAnalysis ? 'active' : ''}`}
        onClick={toggleAnalysis}
      >
        {verse.text}
      </div>
      
      {showAnalysis && (
        <div className="analysis">
          <div className="analysis-section">
            <div className="analysis-title">注音</div>
            <div className="analysis-content pinyin">
              {verse.analysis.pinyin}
            </div>
          </div>
          
          <div className="analysis-section">
            <div className="analysis-title">字义解析</div>
            <div className="analysis-content">
              {verse.analysis.wordAnalysis}
            </div>
          </div>
          
          <div className="analysis-section">
            <div className="analysis-title">句意解析</div>
            <div className="analysis-content">
              {verse.analysis.sentenceAnalysis}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerseComponent;
