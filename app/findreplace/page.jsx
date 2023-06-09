"use client"

import Nav from "../components/Header/Nav";
import { useState, useEffect } from "react";
import './page.css'

export default function FindReplace() {
  const [sentence, setSentence] = useState('');
  const [word, setWord] = useState('');
  const [replaceWord, setReplaceWord] = useState('');

  useEffect(() => {
    var fileData = localStorage.getItem("file-data") || " ";
    window.onload = () => {
      document.getElementById('textarea').innerHTML = fileData;
    }
  }, []);

  const find = () => {
      const match = sentence.indexOf(word);
      if(sentence !== " "){
        if(match !== -1){
          window.alert(`Element is found at index ${match}`);
          return;
        }
      }
      else{
        window.alert(`Enter a sentence/word to find !`);
        return;
      }
      window.alert("No matches found !");
  }

  const replace = () => {
    const input = document.querySelector('#textarea');
    input.value = sentence.replace(word, replaceWord);
    console.log(sentence.replace(word, replaceWord));
  }

  const reset = () => {
    if(confirm("You want to reset?")=== true){
      document.getElementById('textarea').innerHTML = " ";
    }
  }

  return (
    <>
      <Nav />
      <div className='main-container'>
        <div className="header-wrapper">
          <h2>ஒற்றுப்பிழை மற்றும் சொற்திருத்தி</h2>
          <h4>Enter The Tamil Text in Unicode and Spellcheck your words.</h4>
          <textarea id="textarea" rows="20" cols="85" onChange={e => setSentence(e.target.value)}></textarea>
        </div>
        <div>
          <div>
            <input type="text" placeholder='Enter a word to find' onChange={e => setWord(e.target.value)}/>
            <button onClick={find}><span>Find</span></button>
          </div>
          <div>
            <input type="text" placeholder='Enter a word to replace' onChange={e => setReplaceWord(e.target.value)}/>
            <button onClick={replace}><span>Replace</span></button>
          </div>
        </div>
        <div className="button-wrapper">
          <button onClick={reset} type="reset"><span>Reset</span></button>
        </div>
      </div>
    </>
  )
}
