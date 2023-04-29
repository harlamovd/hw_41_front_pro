import {useState} from "react";
function VirtualScroll({ arr, elementHeight, visibleElement }) {
    const [start, setStart] = useState(0);


    function topDiv() {
        return elementHeight * start;
    }
    function bottomDiv() {
        return elementHeight * (arr.length - (start + visibleElement));
    }
    function onScroll(e) {
        setStart(Math.min(
            arr.length - visibleElement,
            Math.floor(e.currentTarget.scrollTop / elementHeight)
        ));
    }

    return (
        <div className='wrapperBlock' style={{height: elementHeight * visibleElement}} onScroll={onScroll}>
            <div style={{height: topDiv()}} />
            {arr.slice(start, start + visibleElement).map((el, index) => <div
                style={{height: elementHeight}}
                className='elementBlock'
                key={start + index}> {el} </div>)}
            <div style={{height: bottomDiv()}} />
        </div>
    )
}

export default VirtualScroll
