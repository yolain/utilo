import {typeOf} from '../Type'

/**
* copy 浅拷贝
* @since 1.0.0
* @param {Object | Array} data
* @returns {Object | Array}
*/
export function copy(data){
  let data2 = Array.isArray(data) ? [] : {};
  for (let i in data) {
    data2[i] = data[i];
  }
  return data2;
}

/**
* deep 深拷贝
* @since 1.0.0
* @param {Object | Array} data
* @returns {Object | Array}
*/
export function deep(data){
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if ( t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deep(data[i]));
    }
  } else if ( t === 'object') {
    for (let i in data) {
      o[i] = deep(data[i]);
    }
  }
  return o;
}
