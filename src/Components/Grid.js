import '../styles/Grid.css'
import Subject from './Class.js'

export default function Grid() {
    return (
        <div className="parent">
            <div className='child'>Time <Subject className='overlay'/></div>
            <div className='child'>Sunday</div>
            <div className='child'>Monday</div>
            <div className='child'>Tuesday</div>
            <div className='child'>Wednesday</div>
            <div className='child'>Thursday</div>
            <div className='child'>Friday</div>
            <div className='child'>Saturday</div>
            {create()}
        </div>
    );
}


function create() {
    let time = 0;
    const elements = [];
    const [className, hrs] = addClass("Monday", 2, 5);
    for (let i = 0; i < 384; i++) {
        if (i % 16 === 0) {
            elements.push(<div className='child' key={i}>{changeTime(time)}</div>);
            time+=1;
        } else {
            elements.push(<div className='child' key={i}> </div>);
        }
    }
    return elements;
}

function changeTime(currentTime) {
    if(currentTime === 0) {
        return `12am`;
    } 
    else if(currentTime >= 13) {
        return `${currentTime % 12}pm`;
    }
    return `${currentTime}am`;
}

function addClass(day, startTime, endTime) {
    let startIndex;
    switch(day) {
        case "Sunday":
            startIndex = 1;
            break;
        case "Monday":
            startIndex = 2;
            break;
        case "Tuesday":
            startIndex = 1;
            break;
        case "Wednesday":
            startIndex = 2;
            break;
        case "Thursday":
            startIndex = 1;
            break;
        case "Friday":
            startIndex = 2;
            break;
        case "Saturday":
            startIndex = 1;
            break;
        default:
            startIndex = 0
    }

    let difference = endTime - startTime;
    return [startIndex, difference];
}
