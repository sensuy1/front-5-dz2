import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/posts'>Посты</NavLink>
            </li>
            <li>
                <NavLink to='/create'>Создание поста</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar