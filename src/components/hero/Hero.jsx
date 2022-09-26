import React from "react"; 
import styles from './Hero.module.scss'
import {AiOutlineSearch} from 'react-icons/ai'


const Hero = () => {
return (
<div className={styles.hero}>
 <form>
  <div className={styles.text}>
  <lable>Where </lable>
  <input type="text" placeholder="Search Location"/>
  </div>

  <div className={styles.from}>
    <span className={styles.border}></span>
    <lable>From</lable>
    <input type="date"/>
    </div>

    <div className={styles.Until}>
    <span className={styles.border}></span>
    <lable>Until</lable>
    <input type="date"/>
    </div>

    <div className={styles.search_btn}>
     <AiOutlineSearch className={styles.icon} size={25}/>
     <button className={styles.btn}>Search for cars</button>
         </div>
 </form>
</div>
)
}


export default Hero