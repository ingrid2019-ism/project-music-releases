import React from 'react'

export const PlaylistContainer = (props) => {

  const { playlists } = props

  return (

    <>
      {playlists.map((playlist) => {
        return (
          <>
            <h2 key={playlist.id}><a href={playlist.external_urls.spotify}>{playlist.name}</a></h2>
          </>
        )
      })
      }
    </>
  )
}


