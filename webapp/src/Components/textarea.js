import './textarea.css'

function Textarea({textarea, textarea2}) {
    var text = ''
    var data = new Array()
    
    for (let i = 0; i < textarea.length; i++) {
        text = `${text}${textarea[i].text}`
    }

    const TempDiv = textarea.map(function(item, i) {
        if (item.text === '*') {
            return (
                <div key={i}>
                    <span className="multiplicationIcon icon"/>
                </div>
            )
        } else if (item.text === '/') {
            return (
                <div key={i}>
                    <span className="divisionIcon icon"/>
                </div>
            )
        } else if (item.text === '+') {
            return (
                <div key={i}>
                    <span className="additionIcon icon"/>
                </div>
            )
        } else if (item.text === '-') {
            return (
                <div key={i}>
                    <span className="subtractionIcon icon"/>
                </div>
            )
        } else {
            return (
                <div key={i}>
                    {item.text}
                </div>
            )
        }
    })

    return (
        <div>
            <div className='TextArea'>{TempDiv}</div>
        </div>
    )
}

export function TextArea2({textarea2}) {
    const TempDiv = textarea2.map(function(item, i) {
        if (item.text === '*') {
            return (
                <div key={i}>
                    <span className="multiplicationIcon icon"/>
                </div>
            )
        } else if (item.text === '/') {
            return (
                <div key={i}>
                    <span className="divisionIcon icon"/>
                </div>
            )
        } else if (item.text === '+') {
            return (
                <div key={i}>
                    <span className="additionIcon icon"/>
                </div>
            )
        } else if (item.text === '-') {
            return (
                <div key={i}>
                    <span className="subtractionIcon icon"/>
                </div>
            )
        } else {
            return (
                <div key={i}>
                    {item.text}
                </div>
            )
        }
    })

    return (
        <div>
            <div className='TextArea2'>{TempDiv}</div>
        </div>
    )
}

export default Textarea