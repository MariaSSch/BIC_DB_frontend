import React from 'react'
import s from "./Card.module.sass"

export default function Card({bic, name, corrAccount}) {
  return (
    <div className={s.card}>
        <p><span>BIC:</span> {bic}</p>
        <p><span>name:</span> {name}</p>
        <p><span>corrAccount:</span> {corrAccount}</p>
    </div>
  )
}
