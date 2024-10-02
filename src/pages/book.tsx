import React from'react';
import '../App.css';
import { useState } from'react';
import Navbar from './components/Navbar';
import Chapters from './components/chapters';
import Content from './components/content';
import Reward from './components/reward';

function Book() {
  const [content, setContent] = useState('');
  const [activeQuest, setActiveQuest] = useState(1);
  const chapterSelected = (index) => {
    setActiveQuest(index + 1);
    switch (index) {
      case 0:
        setContent('Content for Quest 1');
        break;
      case 1:
        setContent('Content for Quest 2');
        break;
      case 2:
        setContent('Content for Quest 3');
        break;
      default:
        setContent('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-20">
        <p className="text-sm text-secondary mt-5 text-left pl-1">Author Wallet: 0x1234567890abcdef</p>
        <h1 className="text-6xl font-bold text-left mt-2">Playbook Title</h1>
        <p className="text-sm text-white text-left pl-1 mt-6 mb-4">Last updated: insert date</p>
      <main className="justify-start">
        <Chapters onChange={chapterSelected} active={activeQuest}/>
        <Content content={content} active={activeQuest}/>
        <Reward />
      </main>
    </div>
    </>
  );
}

export default Book;