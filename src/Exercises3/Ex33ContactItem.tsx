import React from 'react'
import classes from './Ex33ContactItem.module.css';

export default function Ex33ContactItem({ name, address }) {

  return (
    <div className={ classes.item }>
        <div className={classes.red}><h1>{ name }</h1></div>
        <div>{ address }</div>
    </div>
  )
}
