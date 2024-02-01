"use client";
import React from "react";
import Image from 'next/image';
import './App.css';
import judges from './judges.json';
const Judges = () => {
  return (
    <main>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          position: 'relative',
          background: 'linear-gradient(180deg, rgb(72,0,0) 70%, rgb(114,0,0) 100%)'
        }}
      >
        <Image
          src="/judges/Group 1438.svg"
          width={1100}
          height={380}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          alt="Knife"
          style={{ position: 'absolute', zIndex: 1, maxWidth: '100%', height: 'auto' }}
        />
        <Image
          src="/judges/judges.svg"
          width={300}
          height={300}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          alt="Judges"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </div>
      <div
        className="hide-scrollbar"
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            position: 'relative',
            background: 'linear-gradient(180deg, rgb(114,0,0) 0%, rgb(150,0,0) 30%, rgb(172,0,0) 70%, rgb(160,0,0) 100%)',
            overflow: 'scroll',
            padding: '1rem'
          }}  
      >
      {judges.map((judge, index) => (
        <div key={index} className="circle-container">
          <div className="image-container">
            <img style={{
            
            }}
            src={`/judges/images/${index + 1}.jpg`} alt={`Judge ${index + 1}`} draggable="false" onContextMenu={(e) => e.preventDefault()} />
            <div className="social-icons">
              <a href={judge.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/byteverse/footer/LinkedIn.svg" alt="LinkedIn" />
              </a>
              
                       <a href={judge.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/byteverse/footer/Instagram.svg" alt="Instagram" />
              </a>
              </div>
          </div>
        </div>
      ))}
      </div>
      
    </main>
  );
};

export default Judges;