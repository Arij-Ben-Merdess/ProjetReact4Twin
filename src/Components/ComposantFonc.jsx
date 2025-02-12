import { useState } from 'react';
import { Button } from 'react-bootstrap';
function ComponentFonc() {
   const [monTexte,setMonTexte]=useState("Hello 4TWIN7")
    const [value,setValue]=useState(0);
    const handleClick=()=>{
       setValue(value+1)
    }
    const changeText=()=>{
        setMonTexte("Bonjour Arij")
     }

    return (     <>
            Ceci un Composant fonctionnel
            {monTexte}
            <br/>
            <Button variant="primary" onClick={()=>handleClick()}>Incrémenter</Button>
            <br/>
            {value}
            <br/>
            <Button variant="secondary" onClick={()=>changeText()}>Changer text</Button>
            <br/>
            </>
     );
}

export default ComponentFonc;