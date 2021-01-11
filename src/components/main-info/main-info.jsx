import React from 'react';

const ResultsInfo = () => {
  return (
    <div className="results__info favourites hidden">
      <p className="favourites__empty-message">У вас пока нет избранных товаров. Чтобы отметить товар, кликните
        на сердечко в карточке объявления.
      </p>
      <p className="favourites__notion">Вы можете вернуться к списку всех товаров, кликнув ещё раз
        на&nbsp;«Показать избранные»
      </p>
    </div>
  );
};

export default ResultsInfo;
