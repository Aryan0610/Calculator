import './Backspace.css'

function Backspace({textarea, setTextarea}) {
    
    function BtnClick() {
        let temp = new Array()
        for (let i=0; i < textarea.length-1; i++) {
            temp.push(textarea[i])
        }
        setTextarea(temp)
    }

    return (
        <div className='Backspace'>
            <button onClick={() => {BtnClick()}}>
                <img src='img/BackspaceIcon.svg'/>
            </button>
        </div>
    )
}

export default Backspace