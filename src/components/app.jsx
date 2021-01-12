import React, { useState } from 'react';

import Main from './main/main';
import Ad from './ad/ad';

const App = () => {
  const [isPopupShown, setIsPopupShown] = useState(false);
  return (
    <>
      <main>
        <section className="onlineshop-app">
          <h1 className="visually-hidden">Главная</h1>
          <div className="onlineshop-app__blueline"/>
          <div className="onlineshop-app__wrapper">
            {/*<Filter/>*/}
            <Main setIsPopupShown={setIsPopupShown}/>
          </div>
        </section>
      </main>
      {isPopupShown && <Ad setIsPopupShown={setIsPopupShown} />}
    </>
  );
};

export default App;
