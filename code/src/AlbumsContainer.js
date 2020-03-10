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
            artists={album.artists} />
        )
      })}
      <h1>Title</h1>
      <Button link={data.albums.href} total={data.total} />
    </section>
  )
}


