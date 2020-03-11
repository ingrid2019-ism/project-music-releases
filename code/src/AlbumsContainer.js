import React from 'react'
import { Button } from 'Button'
import { AlbumCard } from 'AlbumCard'
import data from './data.json'

export const AlbumsContainer = (props) => {

  const { albums } = props

  return (
    <section>
      {albums.map((album) => {
        return (
          <AlbumCard
            key={album.id}
            title={album.name}
            artists={album.artists}
            pic={album.images[0].url} />
        )
      })}
    </section>
  )
}


