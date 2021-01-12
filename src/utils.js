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
