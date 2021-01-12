import React from 'react';

import ResultsHead from '../main-head/main-head';
import ResultsInfo from '../main-info/main-info';
import MainList from '../main-list/main-list';

import data from '../../data';
import { renameKeys } from '../../utils';

const Main = ({ setIsPopupShown }) => {
  const adaptedProducts = data.map(product => renameKeys(product));

  return (
    <section className="onlineshop-app__results results">
      <ResultsHead/>
      <ResultsInfo/>
      <MainList products={adaptedProducts} setIsPopupShown={setIsPopupShown}/>
    </section>
  );
};

export default Main;
