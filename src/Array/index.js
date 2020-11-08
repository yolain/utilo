import slice from "./slice"
import {testArray,testInclude} from "../Test";

/**
* chunk 数组拆分
* @since 1.0.0
* @param {Array} array
* @param {Number} size
* @return {Array}
*/
export function chunk(array,size= 1){
  testArray(array)
  size = Math.max(parseInt(size),0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

/**
* sort 数组排序
* @since 1.0.0
* @param {Array} array
* @param {Number} type 1:从小到大 2:从大到小 3:随机
* @param {String} key 根据键值排序 默认为空
* @return {Array}
*/
export function sort(array,type = 1,key= null){
  type = parseInt(type)
  testArray(array)
  testInclude(type,[1,2,3])
  // 使用键值排序
  return array.sort((a, b) => {
    switch (type) {
      case 1:return key ? a[key] - b[key] : a - b;
      case 2:return key ? b[key] - a[key] : b - a;
      case 3:return Math.random() - 0.5;
      default:return array
    }
  })
}

/**
* unique 数组去重
* @since 1.0.0
* @param {Array} array
* @return {Array}
*/
export function unique(array){
  if ( Array.hasOwnProperty('from') ) {
    return Array.from(new Set(array));
  }else{
    var n = {},r=[];
    for(var i = 0; i < array.length; i++){
      if (!n[array[i]]){
        n[array[i]] = true;
        r.push(array[i]);
      }
    }
    return r;
  }
}
