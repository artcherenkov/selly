import React from 'react';
import { connect } from 'react-redux';

import Main from './main/main';
import Ad from './ad/ad';
import { getIsAdShown } from '../store/reducers/app-state/selectors';

const App = ({ isAdShown }) => {
  return (
    <>
      <main>
        <section className="onlineshop-app">
          <h1 className="visually-hidden">Главная</h1>
          <div className="onlineshop-app__blueline"/>
          <div className="onlineshop-app__wrapper">
            {/*<Filter/>*/}
            <Main />
          </div>
        </section>
      </main>
      {isAdShown && <Ad />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAdShown: getIsAdShown(state),
});

export { App };
export default connect(mapStateToProps, null)(App);
