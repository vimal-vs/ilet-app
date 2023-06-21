"use client"

import { useState } from "react";
import './findreplace.css'
import '../Header/Nav.css'

export default function FindReplace() {

  const [sentence, setSentence] = useState('');
  const [word, setWord] = useState('');
  const [replaceWord, setReplaceWord] = useState('');

  const reset = () => {
    if(confirm("You want to reset?") === true){
      localStorage.clear();
      window.location.reload();
    }
  }

  let fileReader;
  const handleFileRead = () => {
    const content = fileReader.result;
    if(content){
      if(confirm(`Are you sure? You want to upload this file?`) === true){
        document.getElementById('textarea').innerHTML = content;
      }
    }
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    try{
      fileReader.readAsText(file);
    }catch{}
  };

  function download() {
    const text = document.getElementById("textarea").value;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ilet.txt";
    link.click();
  }
  function triggerFile(){
    document.querySelector("#file").click();
  }

  function triggerFind(){
    const findAlertValue = window.prompt("Enter a word to Find","");
    setWord(findAlertValue);
      find();
  }

  function triggerReplace(){
    const replaceAlertValue = window.prompt("Enter a word to Replace","");
    setReplaceWord(replaceAlertValue);
      replace(replaceAlertValue);
  }

  const find = () => {
      const match = sentence.indexOf(word);
      if(match){
        window.alert(`Element is found at index ${match}`);
        return;
      }
      window.alert("No matches found !");
  }

  const replace = (e) => {
    const input = document.querySelector('#textarea');
    input.value = sentence.replace(word, e);
  }

  return (
    <>
      <nav>
          <ul>
              <li><a href="#">File</a>
                  <ul className="list-element-about-submenu">
                      <li id="open" onClick={() => triggerFile()}><button>Open</button></li>
                      <li id="save"><button onClick={() => download()}>Save</button></li>
                  </ul>
              </li>
              <li><a href="#">Edit</a>
                <ul className="list-element-about-submenu edit-submenu">
                        <li><button onClick={() => triggerFind()}>Find</button></li>
                        <li><button onClick={triggerReplace}>Replace</button></li>
                    </ul>
                </li>
              <li><a href="/spellcheck">Spell Check</a></li>
          </ul>  
          <div className='logo'>
              <a href="/"><img src="logo.png"/></a>
          </div> 
      </nav>
      <div className='upload-container'>
          <h1>Upload a file to read and display</h1>
          <input
              type='file'
              id='file'
              className='input-file'
              accept='.*'
              onChange={e => handleFileChosen(e.target.files[0])}
          />
      </div>
      <div className='main-container'>
        <div className="header-wrapper">
          <h2>Indian language editing tool for Tamil</h2>
          <textarea id="textarea" rows="20" cols="85" onChange={e => setSentence(e.target.value)}></textarea>
        </div>
        <div>
        <div className="button-wrapper">
          <button onClick={reset} type="reset"><span>Reset</span></button>
        </div>
      </div>
      </div>
    </>
  )
}
