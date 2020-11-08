import Lang from '../Lang'
/**
 * rand 随机数
 * @since 1.0.2
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
export function rand(min, max) {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * ( (max+1) - min ))
  }else{
    return null;
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
