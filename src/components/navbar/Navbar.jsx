import React from "react";
import styles from './Navber.module.scss'
import {AiOutlineMenu ,AiOutlineClose, AiOutlineSearch,AiOutlineUser} from 'react-icons/ai'

const Navbar = () => {

const [nav, setNav] = React.useState(false)

return (
<header className={styles.navbar}>
<img width={100}  src={'https://cdn.svgporn.com/logos/nomad.svg'} alt="/"/>
<nav>
  <ul className={nav ? [styles.menu,styles.active].join(' '): styles.menu}>
  <li>
    <a href="#">Learn More</a>
  </li>
  <li>
    <a href="#">Log in</a>
  </li>
  <li>
    <a href="#">Sing up</a>
  </li>
  <li>
  <AiOutlineSearch size={20} style={{marginTop: '0px'}}/>
  </li>
  <li>
    <AiOutlineUser  size={20} style={{marginTop: '0px', color: '#fff'}} />
  </li>
  </ul>
</nav>
<div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
  {nav ?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
</div>
</header>
)
}

export default Navbar