import React from 'react';

import Main from './main/main';
// import Filter from './filter/filter';

const App = () => {
  return (
    <main>
      <section className="onlineshop-app">
        <h1 className="visually-hidden">Главная</h1>
        <div className="onlineshop-app__blueline"/>
        <div className="onlineshop-app__wrapper">
          {/*<Filter/>*/}
          <Main/>
        </div>
      </section>
    </main>
  );
};

export default App;
