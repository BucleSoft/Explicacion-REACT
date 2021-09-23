import React from 'react'

function CardRazasPerros({img, raza, alt}) {
    return (
      <li className="breedCard">
                <div className="contenedorImagen">
                  <img src={img} alt={alt} />
                </div>
                <span className="breedTitle">{raza}</span>
              </li>
    );
  }

  export default CardRazasPerros;
