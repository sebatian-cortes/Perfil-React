import React from 'react'
import { ItemNav } from '../ItemNav/ItemNav'
import { Logo } from '../Logo/Logo'
import '../Navbar/Navbar.css'

export const Navbar = () => {
  return (
    <div>
    <Logo />
    <h3>Sebastian Agudelo</h3>
    <nav>
      <ul>
        <ItemNav content = 'Inicio' />
        <ItemNav content = 'Perfil' />
        <ItemNav content = 'Proyectos' />
        <ItemNav content = 'Referencias' />
        <ItemNav content = 'Experiencia' />
      </ul>
    </nav>
 </div>
  )
}