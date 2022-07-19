import React, {useState} from 'react';
import './App.css';
import Botones from './componentes/Botones';
import Funciones from './componentes/Funciones';


function App(){
const [time, setTime] = useState ({ms:0, s:0, m:0, h:0,});
const[interv, setInterv] = useState();
const[status, setStatus] = useState(0);
// Not started = 0
//started = 1
//paus = 2

const inicio = () => {
 run();
 setStatus(1);
 setInterval(setInterval(run, 10));
};


var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

const run =() => {
if(updatedM === 60){
  updatedH++;
  updatedM = 0;
}
if(updatedS === 60){
  updatedM ++;
  updatedS = 0;
}
if(updatedMs === 100){
  updatedS ++;
  updatedMs = 0;
}
if(updatedH === 24){
  updatedMs++;
  updatedH = 0;
}

updatedMs ++;
return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH });

};

const stop = () => {
clearInterval(interv);
setStatus(2);
};

const reiniciar = () => {
  clearInterval(interv);
  setStatus(0);
  setTime({ms:0, s:0, m:0, h:0})

  };

  const resume =() => inicio();
    
  
   

  return(
<div className="main-section">
<div className="clock-holder">
<div className="stopwatch">
<Funciones time={time}/>
<Botones status={status} resume={resume} reiniciar={reiniciar} stop={stop} inicio={inicio}/>
</div>
</div>
</div>
  );
}

export default App;
