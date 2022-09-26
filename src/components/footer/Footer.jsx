import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img width={100}  src={'https://cdn.svgporn.com/logos/nomad.svg'} alt="/"/>
      <p>Maron-Wilsons</p>
    </div>
  )
}

export default Footer