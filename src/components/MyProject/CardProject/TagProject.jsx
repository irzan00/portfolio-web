import React from 'react'

function TagProject({tag}) {
    return (
        <div className='tag-project d-flex justify-content-center align-items-center'>
            <h6 className='mb-0'>{tag}</h6>
        </div>
    )
}

export default TagProject;