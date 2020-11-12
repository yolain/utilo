import Lang from '../Lang'
/*
 * rand 随机数
 * @since 1.0.0
 *        1.0.3 move:move to random module
 *              add:decimalNum 新增小数随机
 * @param {Number} minNum 最小值
 * @param {Number} maxNum 最大值
 * @param {Number} decimalNum 如需小数随机 需设置小数点后位数
 * @return {Number}
 */
export function rand(minNum,maxNum,decimalNum) {
  let max = 0, min = 0;
  minNum <= maxNum ? (min = minNum, max = maxNum) : (min = maxNum, max = minNum);
  switch (arguments.length) {
    case 1:
      return Math.floor(Math.random() * (max + 1));
    case 2:
      return Math.floor(Math.random() * (max - min + 1) + min);
    case 3:
      return (Math.random() * (max - min) + min).toFixed(decimalNum);
    default:
      return Math.random();
  }
}
/**
* 随机昵称
* @since 1.0.2
* @params {String} lang 语言 (en,cn)
* @return {String}
*/
export function nickname(lang){
  if(lang && Lang[lang] && Lang[lang]['nickname']){
    const header = Lang[lang]['nickname']['header']
    const footer = Lang[lang]['nickname']['footer']
    return header[rand(0,header.length-1)] + footer[rand(0,footer.length-1)]
  }
  else return ''
}
/**
 * 随机姓名
 * @since 1.0.2
 * @params {String} lang 语言 (en,cn)
 * @params {Number} gender 性别 (0 所有,1 男性,2 女性)
 * @return {String}
 */
export function name(lang,gender = 0){
  gender = gender ? parseInt(gender) : 0
  if(lang && Lang[lang] && Lang[lang]['name']){
    const family = Lang[lang]['name']['family']
    const male = Lang[lang]['name']['male']
    const female = Lang[lang]['name']['female']
    switch (gender){
      case 2:
        return family[rand(0,family.length-1)] + female[rand(0,female.length-1)]
      case 1:
        return family[rand(0,family.length-1)] + male[rand(0,male.length-1)]
      case 0:
      default:
        const familyRand = family[rand(0,family.length-1)]
        const allRand = [...male,...female]
        return familyRand +  allRand[rand(0,allRand.length-1)]
    }
  }
  else return ''
}
