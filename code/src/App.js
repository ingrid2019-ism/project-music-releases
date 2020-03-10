import React from 'react'
import data from './data.json'
import { Play } from './Icons';
import { Heart } from './Icons';
import { Dots } from './Icons';
import { Button } from 'Button';
import { AlbumsContainer } from 'AlbumsContainer';

console.log(data)

export const App = () => {
  return (
    <div>
      <AlbumsContainer albums={data.albums.items} />
      <Dots />
      <Play />
      <Heart />
    </div>
  )
}
