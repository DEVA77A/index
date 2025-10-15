import React from 'react'
import { LightningCSSOptions } from 'vite'

const User = ({name,department}) => {
  return (
    <div>
      <h1>i am {name} my department {department}</h1>
    </div>
  )
}

export default User