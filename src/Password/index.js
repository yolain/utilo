import Regexp from '../Regexp'
/*
* pwdLevel 获取密码强度
* @since 1.0.0
*        1.0.2 pwdLevel
* @param {String} txt
* @return {Number}
*/
export function pwdLevel(txt) {
  let level = 0;
  if (txt.length < 6) {
    level = 0;
  } else {
    let hasUpper = Regexp.upper.test(txt);
    let hasLower = Regexp.lower.test(txt);
    let hasNum = Regexp.number.test(txt);
    let hasSpec = Regexp.spec.test(txt);
    let arr = [hasUpper, hasLower, hasNum, hasSpec];
    for (let n of arr) {
      if (n) {
        level++;
      }
    }
  }
  return level;
}
