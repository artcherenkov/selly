import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export const renameKeys = obj => {
  const processVal = val => {
    if (typeof val !== 'object') {
      return val;
    }

    if (Array.isArray(val)) {
      return val.map(renameKeys);
    }

    return renameKeys(val);
  }

  return Object.fromEntries(
    Object.entries(obj)
      .map(([key, val]) => {
        // todo заменить на arr.includes()
        if (key === 'photos' || key === 'coordinates') {
          return [ convertSnakeToCamel(key), val ]
        }

        return [ convertSnakeToCamel(key), processVal(val) ]
      })
  );
}

export const convertSnakeToCamel = (str) => str.replace(/-(.)/g, g => g[1].toUpperCase())

export const range = (count) => {
  const res = [];
  for (let i = 0; i < count; i++) {
    res.push(i);
  }

  return res;
}

export const formatStreet = (street) => street.includes('ул.') ? `улица ${street.replace('ул.', '').trim()}` : `${street}`;

export const formatDate = (_date) => {
  const date = moment(+_date);

  const diffInDays = Math.floor(moment.duration(moment().diff(date)).asDays());
  const diffInYears = Math.floor(moment.duration(moment().diff(date)).asYears());

  // 7 days ago or less
  if (diffInDays <= 7) {
    return date.fromNow();
  }

  // less than a year ago
  if (!diffInYears) {
    return date.format('D MMMM');
  }

  // more than a year ago
  return date.format('D MMMM YYYY года');
}
