import './App.css';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import { useState } from 'react';

function App() {

  let [sizes, setSizes] = useState({width: "100px", height: "100px"})

  let onResize = (event, {element, size, handle}) => {
    // this.setState({width: size.width, height: size.height});
    setSizes({width: sizes.width, height: size.height})
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Draggable>
          <p>This is draggable</p>
        </Draggable>
        
        <ResizableBox width={200} height={200} onResize={onResize}>
        <span>Contents</span>
      </ResizableBox>
      </header>


    </div>
  );
}

export default App;
