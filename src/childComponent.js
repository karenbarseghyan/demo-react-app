import React from 'react';
import styles from './local.module.css';

function ChildComponent() {
    return (
        <h2 className = {styles.customHeader}>Child Component</h2>
    )
};

export default ChildComponent;