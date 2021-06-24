import React from 'react';

function Hello(props){

    function DoThis(){
        alert("Why you click this !!!!!!!!!")
    }
    return(
       <div>
            
            <center>
                <p>Name : {props.name}, Age : {props.age}</p>
                <button onClick={DoThis}>Cleck me</button>
            </center>  
       </div>
    );
}

export default Hello;