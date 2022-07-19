import React from 'react';


function Botones(props){
  return(
<div>
    {(props.status === 0)?
        <button className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.inicio}>inicio</button> : ""

    }
  

</div>

  );
}

export default Botones;