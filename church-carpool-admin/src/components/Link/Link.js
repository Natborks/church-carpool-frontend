import React from 'react';
import styles from "./link.module.css";

function Link ({children,href}){
    return (<a href = {href} className={styles.a}>{children}</a>);
}

export default Link;
