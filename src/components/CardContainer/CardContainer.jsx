import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import s from "./CardContainer.module.sass";

export default function CardContainer() {
    const [state, setState] = useState([]);

    const getBICarray = async () => {
      await fetch("http://localhost:5000/")
      .then(data => data.json())
      .then(data => setState(data))
    }
    useEffect(() => {
      getBICarray()
    },[])

  return (
    <div className={s.container}>
      <h2>Сравочник БИК</h2>
      <div className={s.card_container}>
          
          {state.slice(1000, 1011).map(i => { //1793 elements is too much
              
                  return <Card key={Date.now()} 
                              bic={i.bic} 
                              name={i.name} 
                              corrAccount={i.corrAccount}/>
          })}
      </div>
    </div>
  )
}
