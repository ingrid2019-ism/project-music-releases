import React from 'react'
import data from './data.json'
import { Play } from './Icons';
import { Heart } from './Icons';
import { Dots } from './Icons';

console.log(data)

export const App = () => {
  return (
    <div>
      Find me in src/app.js!
      <Dots />
      <Play />
      <Heart />
    </div>
  )
}
