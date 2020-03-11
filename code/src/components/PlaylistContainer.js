import React from 'react'

export const PlaylistContainer = (props) => {

  const { playlists } = props

  return (

    <>
      {playlists.map((playlist) => {
        return (
          <>
            <h2 key={playlist.id}>{playlist.name}</h2>
            <p>by {playlist.owner.display_name}</p>
          </>
        )
      })
      }
    </>
  )
}


