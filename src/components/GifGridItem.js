import React from 'react'

export const GifGridItem = ( {url, title} ) => {
    return (
        <div class="card animate__bounceIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
