import React from 'react'
import CardTitleHome from './CardTitleHome'

export default function Home(props) {
    return (
        <div className="container">

            <div className="row text-center">
                {props.gifs.map((gif, index) =>{
                    return(<CardTitleHome title={gif.username} url={gif.url} />)
                })}
            </div>

        </div>
    )
}
