import React from 'react'
import data from 'data.json'
import { AlbumsContainer } from 'AlbumsContainer';

console.log(data)

export const App = () => {
  return (
    <main>
      <AlbumsContainer albums={data.albums.items} />
    </main>
  )
}
