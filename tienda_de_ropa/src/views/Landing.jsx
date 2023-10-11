import React from 'react';
import Promo from '../components/promociones/Promo';
import Trending from './Trending';
import Categories from './Categories';

function Landing() {
  return (
    <>
        <Promo />
        <Trending />
        <Categories />
    </>
  )
}

export default Landing