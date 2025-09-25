
import React from 'react';
import VerseComponent from './components/VerseComponent';
import { tianwenData } from './data/tianwen';

function App() {
  // 将174句分成多个段落，每段10-12句
  const sections = [
    { title: "天地开辟·宇宙起源", verses: tianwenData.slice(0, 12) },
    { title: "日月星辰·天体运行", verses: tianwenData.slice(12, 24) },
    { title: "大地山川·神话传说", verses: tianwenData.slice(24, 36) },
    { title: "英雄故事·治水传说", verses: tianwenData.slice(36, 48) },
    { title: "远古传说·神兽异物", verses: tianwenData.slice(48, 60) },
    { title: "商汤革命·夏桀灭亡", verses: tianwenData.slice(60, 72) },
    { title: "商周历史·王朝兴替", verses: tianwenData.slice(72, 84) },
    { title: "殷商故事·帝王传说", verses: tianwenData.slice(84, 96) },
    { title: "周朝兴起·文武之道", verses: tianwenData.slice(96, 108) },
    { title: "楚国历史·春秋战国", verses: tianwenData.slice(108, 120) },
    { title: "历史反思·兴亡之道", verses: tianwenData.slice(120, 132) },
    { title: "古代圣贤·德行品格", verses: tianwenData.slice(132, 144) },
    { title: "王朝更替·历史循环", verses: tianwenData.slice(144, 156) },
    { title: "天人之际·终极追问", verses: tianwenData.slice(156, 168) },
    { title: "人生哲理·最终思考", verses: tianwenData.slice(168, 174) }
  ];

  return (
    <div className="container">
      <div className="scroll-indicator">↓</div>
      
      <header className="header">
        <h1 className="title">天问</h1>
        <p className="subtitle">屈原 著</p>

      </header>

      <main>
        {sections.map((section, index) => (
          <div key={index} className="poem-section">
            <h2 style={{ 
              textAlign: 'center', 
              marginBottom: '30px', 
              color: '#2c3e50', 
              fontSize: '1.4rem',
              borderBottom: '2px solid #3498db',
              paddingBottom: '10px'  
            }}>
              {section.title}
            </h2>
            {section.verses.map(verse => (
              <VerseComponent key={verse.id} verse={verse} />
            ))}
          </div>
        ))}
      </main>
      
      <footer style={{
        textAlign: 'center',
        padding: '40px 20px',
        color: '#7f8c8d',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '15px',
        marginTop: '40px'
      }}>
        <p>《天问》全文共174句，展现了屈原对宇宙、历史、人生的深刻思考</p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
          "路漫漫其修远兮，吾将上下而求索"
        </p>
      </footer>
    </div>
  );
}

export default App;
