import logo from './logo.svg';
import './App.css';
import VirtualScroll from "./VirtualScroll/VirtualScroll";


function App() {

    function createArr (amountBlocks) {
        const arr = new Array(amountBlocks).fill(0);
        return  arr.map((el, index, array) => `${el = ++index} block aut of ${array.length}`);
    }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='content'>
            < VirtualScroll arr={createArr(100)} elementHeight={30} visibleElement={8}/>
        </div>

    </div>
  );
}

export default App;
