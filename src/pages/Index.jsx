import React from 'react';
import borderCollie from '../media/borderCollie.jpg';
import rhodesian from '../media/rhodesian.jpg';
import CardRazasPerros from '../components/CardRazasPerros';
import { Layout } from '../layouts/Layout';

export const Index = () => {
    return (
        <Layout>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="breedCardContainer">
            <CardRazasPerros img={borderCollie} alt="Imagen del Border Collie" raza="Border Collie" />
            <CardRazasPerros img={rhodesian} alt="Imagen del Rhodesian" raza="Rhodesian" />
            <CardRazasPerros img={rhodesian} alt="Imagen del Rhodesian" raza="Rhodesian" />
          </ul>
        </section>
        </Layout>
    );
}
