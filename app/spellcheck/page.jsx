export default function spellCheck(){
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
                    <li><a href="/statistics">Stats</a></li>
                </ul>  
                <div className='logo'>
                    <a href="/"><img src="logo.png"/></a>
                </div> 
            </nav>
            <div>Spell check</div>
        </>
    )
}