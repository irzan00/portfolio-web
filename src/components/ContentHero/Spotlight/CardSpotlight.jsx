import React from 'react'

function CardSpotlight({icon, type, fill}) {
    return(
        <div className='card-spotlight'>
            <img src={icon} alt="icon" />
            <div className='card-spotlight__content gap-1'>
                <h6 className='mb-0'>{type}</h6>
                <p className='mb-0'>{fill}</p>
            </div>
        </div>

    )
}

export default CardSpotlight;