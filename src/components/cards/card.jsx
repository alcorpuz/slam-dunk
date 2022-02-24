import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'

function Card({title, imageUrl, locAddress, locPhone, locLink}) {
    return (
        <div className='generic-card-container'>
            <div className='card-image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='card-title'>
                <h3>{title}</h3>
            </div>
            <div className='card-body'>
                <p>{locAddress}</p>
            </div>
            <div className='card-body'>
                <p>{locPhone}</p>
            </div>
            <div>
                <button>
                    <Link to={locLink}>
                        See More 
                    </Link>
                </button>
            </div>

        </div>
    )
}

export default Card