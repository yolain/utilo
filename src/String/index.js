/**
* trim 去除空格
* @since 1.0.0
* @param {String} str
* @param {Number} type 1-所有空格 2-前后空格 3-前空格 4-后空格
* @returns {String}
*/
export function trim(str,type= 1){
  type = parseInt(type)
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}

/**
* changeCase 变换书写形式
* @since 1.0.0
* @param {String} str
* @param {Number} type 1-首字母大写  2-首页母小写  3-大小写转换  4-全部大写  5-全部小写
* @returns {String}
*/
export function changeCase(str,type){
  type = type || 4
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
      });
    case 3:
      return str.split('').map( function(word){
        if (/[a-z]/.test(word)) {
          return word.toUpperCase();
        }else{
          return word.toLowerCase()
        }
      }).join('')
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
}

/**
* filterTag 过滤html标签
* @since 1.0.0
* @param {String} str
* @returns {String}
*/
export function filterTag(str){
  str = str.replace(/&/ig, "&amp;");
  str = str.replace(/</ig, "&lt;");
  str = str.replace(/>/ig, "&gt;");
  str = str.replace(" ", "&nbsp;");
  return str;
}
