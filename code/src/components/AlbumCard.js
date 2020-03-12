import React from 'react'
import { Play } from './Icons';
import { Heart } from './Icons';
import { Dots } from './Icons';

export const AlbumCard = (props) => {

  const { title, artists, pic, albumLink } = props

  return (
    <article className="album">
      <img src={pic} alt="" className="album-img" />
      <ul>
        <li><Heart /></li>
        <li className="play"><Play /></li>
        <li><Dots /></li>
      </ul>
      <section>
        <h2><a href={albumLink}>{title}</a></h2>
        {artists.map(item => {
          return (
            <p key={item.id}><a href={item.external_urls.spotify}>{item.name}</a></p>
          )
        })}
      </section>
    </article>
  )
}

