import Regexp from '../Regexp'
/**
 * typeOf 输出类型
 * @since 1.0.0
 * @params {Any} obj
 * @return {String}
 */
export function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
  };
  return map[toString.call(obj)];
}
/**
* isString 是否为字符串
* @since 1.0.0
*/
export function isString(o){
  const type = typeof o
  return type === 'String' || (type === 'Object' && o != null && !Array.isArray(o))
}

/**
 * isNumber 是否为数字
 * @since 1.0.0
 */
export function isNumber(o){
  return typeof o === 'Number'
}

/**
 * isBoolean 是否为布尔值
 * @since 1.0.0
 */
export function isBoolean(o){
  return o === true || o === false
}
/**
 * isFalse 是否为假
 * @since 1.0.0
 */
export function isFalse(o) {
  if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || isNaN(o)) {
    return true;
  } else {
    return false;
  }
}
/**
 * isTrue 是否为真
 * @since 1.0.0
 */
export function isTrue(o) {
  return isFalse(o)
}

/**
 * isUndefined 是否为undefined
 * @since 1.0.0
 */
export function isUndefined(o) { //是否undefined
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}
/**
 * isNull 是否为null
 * @since 1.0.0
 */
export function isNull (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}
/**
 * empty 是否为空
 * @params {Any} o
 * @return {Boolean}
 */
export function empty(o) {
  return isUndefined(o) || isNull(o) || isNaN(o)
}

/**
 * isEmptyObject 判断是否为空对象
 * @param {*} object 源对象
 * @since 1.0.7
 */
export function isEmptyObject (object) {
  return Object.keys(object).length === 0
}

/**
 * isObject 判断是否为对象
 * @param {*} object
 * @since 1.0.7
 */
export function isObject (object) {
  return Object.prototype.toString.call(object) === '[object Object]'
}

/**
 * isArray 判断是否为数组
 * @param {*} array
 * @since 1.0.7
 */
export function isArray (array) {
  return Object.prototype.toString.call(array) === '[object Array]'
}

/**
 * isEmpty 判断是否为空
 * @param {*} value  源对象
 * @since 1.0.7
 */
export function isEmpty (value) {
  if (isArray(value)) {
    return value.length === 0
  }
  if (isObject(value)) {
    return isEmptyObject(value)
  }
  return !value
}

/**
 * 判断是否在数组中
 * @param {*} search
 * @param {*} array
 * @since 1.0.7
 */
export function inArray (search, array) {
  return array.includes(search)
}


/**
 * isIdCard  是否为身份证号
 * @param  {String|Number} str
 * @param  {Boolean} strict 是否严格
 * @return {Boolean}
 */
export function isIdCard(str,strict=false) {
  if(strict){
    if (!Regexp.idcard.test(str)) {
      console.warn('你输入的身份证长度或格式错误')
      return false
    }
    //身份证城市
    const aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
    if(!aCity[parseInt(str.substr(0,2))]) {
      console.warn('你的身份证地区非法')
      return false
    }

    // 出生日期验证
    const sBirthday=(str.substr(6,4)+"-"+Number(str.substr(10,2))+"-"+Number(str.substr(12,2))).replace(/-/g,"/"),
      d = new Date(sBirthday)
    if(sBirthday != (d.getFullYear()+"/"+ (d.getMonth()+1) + "/" + d.getDate())) {
      console.warn('身份证上的出生日期非法')
      return false
    }

    // 身份证号码校验
    let sum = 0,
      weights =  [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = "10X98765432"
    for (let i = 0; i < str.length - 1; i++) {
      sum += str[i] * weights[i];
    }
    const last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (str[str.length-1] != last) {
      console.warn('你输入的身份证号非法')
      return false
    }
    return true
  }
  else return Regexp.idcard.test(str)
}
