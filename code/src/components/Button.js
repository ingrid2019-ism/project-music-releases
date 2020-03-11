import React from 'react'

export const Button = ({ link, total }) => {

  return (
    < button className="btn" > {link} and {total}</button>
  )
}

// OR
/*
export const Button = (props) => {

  const {link, total} = props

  return (
    < button className="btn" > {link} and {total}</button>
  )
}
*/
