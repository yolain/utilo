import {accMul} from "../Number";

/**
* toDecimal 保留小数点${x}位 (会四舍五入)
* @since 1.0.0
* @param {Number} x
* @param {Number} val
* @return {Number}
*/
export function toDecimal(x,val) {
  let f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  f = Math.round(x*10**val)/10**val;
  let s = f.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + val) {
    s += '0';
  }
  return s;
}
/**
* toFloat 保留小数点${x}位 (截断)
* @since 1.0.0
* @param {Number} x
* @param {Number | String} val
* @return {Number}
*/
export function toFloat(x,val){
  x = parseInt(x)
  return (toDecimal(val,x+1)).toString().slice(0,-1)
}
/**
* filterZero 抹零
* @since 1.0.0
* @param {Number | String} val
* @return {Number}
*/
export function filterZero(val){
  return parseFloat(val)
}
/**
* money 千分位
* @since 1.0.0
* @param {Number | String} val 值
* @param {Number | String} x 保留小数点位数
* @return {String}
*/
export function money(val,x=2){
  let noNegative = true; //默认是正值。
  let zheng=val.split(".")[0];
  let dian=val.split(".")[1];
  val=parseFloat(val+"").toFixed(x);
  val=val+""; //转换成字符串
  if(parseFloat(val) < 0){ //是负数
    val = Math.abs(val).toFixed(x) + "";
    noNegative = false;
  }
  //将整数部分，利用字符串的charAt() 方法，转换成数组。
  let zhengArr=[];
  for(let i=0;i<zheng.length;i++){
    zhengArr.push(zheng.charAt(i));
  }
  zhengArr=zhengArr.reverse();
  let t="";
  for(let i=0;i<zhengArr.length;i++){
    if(i%3==2&&i!=zhengArr.length-1){ //为第三位，并且并不是最后了。如123456时，6并不加,
      t+=zhengArr[i]+",";
    }else{
      t+=zhengArr[i]+""; //加上空格
    }
  }
  return (noNegative?"":"-")+t.split("").reverse().join("")
    +"."+dian;
}
/**
* percent 百分比
* @since 1.0.0
* @param {Number | String} val 值
* @return {String}
*/
export function percent(val){
  return parseFloat(accMul(val,100).toFixed(4)) + '%'
}
/**
* hidden 隐藏字段
* @since 1.0.0
* @param {String} str
* @return {String}
*/
export function hidden(str) {
  return str ? str : '*****'
}
/**
* bankcard 格式化银行卡
* @since 1.0.0
* @param {String | Number} val
* @return {String}
*/
export function bankcard(val) {
  return val.replace(/(.{4})/g, '$1 ')
}
/**
* plusStr 在字段中间加特殊字符
* @since 1.0.0
* @param {String} str
* @param {Number} frontLen 起始不被遮盖的长度
* @param {Number} endLen 结尾不被遮盖的长度
* @param {String} hideStr 遮盖字符
* @return {String}
*/
export function plusStr(str, frontLen, endLen,hideStr = '*') {
  if(str.length <= 2 ){
    return str.substring(0, frontLen) + hideStr
  }
  let len = str.length - frontLen - endLen
  let hstr = ''
  for (let i = 0; i < len; i++) {
    hstr += hideStr
  }
  return str.substring(0, frontLen) + hstr + str.substring(str.length - endLen)
}
