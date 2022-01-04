import './App.css';
import Draggable from 'react-draggable';
import { useState } from 'react';

import Toast from './Toast';

function App() {

  let [isDraggable, setIsDraggable] = useState(true)
  let [show, setShow] = useState(false)

  return (
    <div className="App">
        <Draggable disabled={isDraggable} onStop={() => {setShow(true)
          setTimeout(() => setShow(false), 2000)
        }}> 
          <p data-tip="This is tooltip" className='tooltip'>This is draggable</p>
        </Draggable>

        {show ? <Toast></Toast>: <></>}

        <button onClick={() => setIsDraggable(!isDraggable)}>{isDraggable ? "Enable Drag": "Disable Drag"}</button>
        

    </div>
  );
}

export default App;
