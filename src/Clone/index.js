import {typeOf} from '../Type'

/**
* clone 浅拷贝
* @since 1.0.0
*        1.0.2 rename:clone
* @param {Object | Array} data
* @return {Object | Array}
*/
export function copy(data){
  let data2 = Array.isArray(data) ? [] : {};
  for (let i in data) {
    data2[i] = data[i];
  }
  return data2;
}

/**
* deepCopy 深拷贝
* @since 1.0.0
*        1.0.2 rename:deepCopy
* @param {Object | Array} data
* @return {Object | Array}
*/
export function deepCopy(data){
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
      o.push(deepCopy(data[i]));
    }
  } else if ( t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}
