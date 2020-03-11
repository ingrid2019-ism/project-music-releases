import React from 'react'
import { AlbumCard } from 'AlbumCard'

export const AlbumsContainer = (props) => {

  const { albums } = props

  return (
    <section className="albums-container">
      {albums.map((album) => {
        return (
          <AlbumCard
            key={album.id}
            title={album.name}
            artists={album.artists}
            pic={album.images[0].url}
            albumLink={album.external_urls.spotify}
          />
        )
      })}
    </section>
  )
}


