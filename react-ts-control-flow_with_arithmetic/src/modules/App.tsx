//import React from 'react'
import { VariablesOps } from './VariablesOps'
import { DecisionDemo } from './DecisionDemo'
import { LoopsDemo } from './LoopsDemo' //Importe de los tsx que ya creamos antes dentro de la pagina a ver en pantalla
import ArithmeticOps from '@/modules/ArithmeticOps'

export function App(){
  return (
    <>
      <header>
        <h1>React + TypeScript — Variables, Decisiones, Ciclos y Aritmética</h1>
        <p>Ejemplos prácticos de frontend con estado, eventos, render y utilidades.</p>
      </header>
      <main>
        <section className="card"><VariablesOps /></section>
        <section className="card"><DecisionDemo /></section>
        <section className="card"><LoopsDemo /></section>
        <section className="card"><ArithmeticOps /></section>
      </main>
    </>
  )
}
