/**
* rand 随机数
* @since 1.0.0
* @param {Number} min
* @param {Number} max
* @returns {Number}
*/
export function rand(min, max) {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * ( (max+1) - min ))
  }else{
    return null;
  }
}

/**
* accAdd 高精度加法
* @since 1.0.0
* @param {Number} arg1
* @param {Number} arg2
* @returns {Number}
*/
export function accAdd(arg1, arg2) {
  let r1, r2, max;
  try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  max = Math.pow(10, Math.max(r1, r2))
  return (arg1 * max + arg2 * max) / max
}
/**
 * accSub 高精度减法
 * @since 1.0.0
 * @param {Number} arg1
 * @param {Number} arg2
 * @returns {Number}
 */
export function accSub(arg1, arg2) {
  let r1, r2, max, min;
  try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  max = Math.pow(10, Math.max(r1, r2));
  //动态控制精度长度
  min = (r1 >= r2) ? r1 : r2;
  return ((arg1 * max - arg2 * max) / max).toFixed(min)
}
/**
 * accSub 高精度乘法
 * @since 1.0.0
 * @param {Number} arg1
 * @param {Number} arg2
 * @returns {Number}
 */
export function accMul(arg1, arg2) {
  let max = 0, s1 = arg1.toString(), s2 = arg2.toString();
  try { max += s1.split(".")[1].length } catch (e) { }
  try { max += s2.split(".")[1].length } catch (e) { }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, max)
}
/**
 * accSub 高精度除法
 * @since 1.0.0
 * @param {Number} arg1
 * @param {Number} arg2
 * @returns {Number}
 */
export function accDiv(arg1, arg2) {
  var t1 = 0, t2 = 0, r1, r2;
  try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
  try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
  r1 = Number(arg1.toString().replace(".", ""))
  r2 = Number(arg2.toString().replace(".", ""))
  return (r1 / r2) * pow(10, t2 - t1)
}
Number.prototype.div = function (arg) {
  return accDiv(this, arg);
}
