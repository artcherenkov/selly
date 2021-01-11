import React from 'react';

import ResultsHead from '../main-head/main-head';
import ResultsInfo from '../main-info/main-info';
import MainList from '../main-list/main-list';

const Main = () => {
  return (
    <section className="onlineshop-app__results results">
      <ResultsHead/>
      <ResultsInfo/>
      <MainList/>
    </section>
  );
};

export default Main;
