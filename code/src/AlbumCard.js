import React from 'react'

export const AlbumCard = (props) => {

  const { title, artists } = props

  return (
    <article>
      <h1>{title}</h1>
      {artists.map(item => {
        return (
          <p key={item.id}>{item.name}</p>
        )
      })}
    </article>
  )
}

