import React from 'react'
import PropTypes from 'prop-types'




function NiceLink({text, myref}) {
    return (
        <div className = 'NiceLink'>
           <a href = {myref} > <h1>{text}</h1></a>
     </div>
    )
}


NiceLink.propTypes =  
{
    text: PropTypes.string.isRequired,
    myref: PropTypes.string.isRequired
}


export default NiceLink