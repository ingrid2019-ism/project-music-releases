import React from 'react'

export const AlbumCard = (props) => {

  const { title, artists, pic } = props

  return (
    <article>
      <img src={pic} alt="" />
      <h1>{title}</h1>
      {artists.map(item => {
        return (
          <p key={item.id}>{item.name}</p>
        )
      })}
    </article>
  )
}

