import './Nav.css'

export default function Nav(){
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/findreplace">Find and Replace</a></li>
                <li><a href="/spellcheck">Spell Check</a></li>
                <li><a href="/fileupload">File Upload</a></li>
            </ul>  
            <div className='logo'>
                <img src="logo.png"/>
            </div> 
        </nav>
    )
}