import React from 'react'

//Manipularemos informacion para e-cards con datos que vienen de un objeto

const user ={
    name: 'Lucho Diaz',
    imageUrl:'https://e7.pngegg.com/pngimages/400/1001/png-clipart-mater-lightning-mcqueen-youtube-cars-youtube-vintage-car-car.png',
    imageSize:"200px"
}

function CardsProfile() {
  return (
    <>
    <h1>{user.name}</h1>
    <img src={(user.imageUrl)} className='avatar' alt={'Photo of: ' + user.name} 
    style={{
        width: user.imageSize,
        height: user.imageSize
    }}
    />
    </>
  )
}

export default CardsProfile