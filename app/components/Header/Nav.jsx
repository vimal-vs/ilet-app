import './Nav.css'

export default function Nav(){
    return (
        <nav>
            <ul>
                <li><a href="/findreplace">Find and Replace</a></li>
                <li><a href="/spellcheck">Spell Check</a></li>
            </ul>  
            <div className='logo'>
                <a href="/"><img src="logo.png"/></a>
            </div> 
        </nav>
    )
}