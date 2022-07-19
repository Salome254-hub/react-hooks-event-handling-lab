// Code Keypad Component Here
import React from "react";
function Keypad(){
    function key(event){console.log(`Entering password...`)}
return <input type="password" onChange={key} />










}
export default Keypad;