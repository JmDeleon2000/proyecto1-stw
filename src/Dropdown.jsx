import React from 'react'
import PropTypes from 'prop-types'




function Dropdowm({text, myref}) {
    return (
        <div className = 'Dropdowm'>
           <a href = {myref} > <h1>{text}</h1></a>
     </div>
    )
}


Dropdowm.propTypes =  
{
    text: PropTypes.string.isRequired,
    myref: PropTypes.string.isRequired
}


export default Dropdowm