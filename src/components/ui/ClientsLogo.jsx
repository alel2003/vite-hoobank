import React from 'react'

function ClientsLogo({img, text}) {
  return (
    <div>
        <a href="#">
        <img className='w-[192px] h-[60px] object-contain' src={img} alt={text} />
        </a>
    </div>
  )
}

export default ClientsLogo