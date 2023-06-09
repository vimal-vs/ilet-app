"use client"

import Nav from "../components/Header/Nav";
import './page.css'

export default function fileupload(){
    let fileReader;
    const handleFileRead = () => {
      const content = fileReader.result;
      if(content){
        if(confirm(`Are you sure? You want to upload this file?`) === true){
          document.getElementById('textarea').innerHTML = content;
          localStorage.setItem("file-data",content);
        }
      }
    };
    const handleFileChosen = (file) => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    };
    const redirect = () => {
      location.replace("/findreplace")
    }
    return (
        <>
          <Nav />
          <div className='upload-container'>
              <h1>Upload a file to read and display</h1>
              <input
                  type='file'
                  id='file'
                  className='input-file'
                  accept='.*'
                  onChange={e => handleFileChosen(e.target.files[0])}
              />
              <textarea id='textarea'></textarea>
              <button onClick={redirect}><span>Submit</span></button>
          </div>
        </>
	)
}