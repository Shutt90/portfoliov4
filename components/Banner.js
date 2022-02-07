import Image from 'next/image';
import React from 'react';
import styles from '/styles/banner.module.css'
function Banner({title, subtitle, alt, onClick}) {
  return (
    <div className={styles.container}>
        <div>
            <h1 className={styles.title}>{title}</h1>
            <h3 onClick={onClick} className={styles.subtitle}>{subtitle}</h3>
        </div>
        <Image alt={alt} width='400' height='400' src='/static/js.png' />
    </div>
  );
}

export default Banner;