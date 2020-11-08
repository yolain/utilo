/**
* toQueryString url参数转对象
* @since 1.0.0
* @param {String} url default:window.location.href
* @return {Object}
*/
export function toQueryString(url) {
  url = !url ? window.location.href : url;
  if(url.indexOf('?') === -1) {
    return {};
  }
  let search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') {
    return {};
  }
  search = search.split('&');
  let query = {};
  for (let i = 0; i < search.length; i++) {
    let pair = search[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

/**
* stringify 对象序列化
* @since 1.0.0
* @param {Object} obj
* @return {String}
*/
export function stringify(obj) {
  if (!obj) return '';
  let pairs = [];
  for (let key in obj) {
    let value = obj[key];

    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
      }
      continue;
    }
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }

  return pairs.join('&');
}
