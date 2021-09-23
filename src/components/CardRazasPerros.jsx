import React from 'react';
import {Link} from 'react-router-dom';

function CardRazasPerros({img, raza, alt}) {
    return (
      <li className="breedCard">
                  <Link to='/rhodesian'>
                <div className="contenedorImagen">
                  <img src={img} alt={alt} />
                </div>
                  </Link>
                <span className="breedTitle">{raza}</span>
              </li>
    );
  }

  export default CardRazasPerros;
