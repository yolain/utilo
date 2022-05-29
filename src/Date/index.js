import {testDateFormat, testLang, testTimeZone} from "../Test";
import Lang from '../Lang'

/**
 * formatTime 格式化日期与时间
 * @since 1.0.0
 *        1.0.2 add: `format` 类型 `Y年M月D日 h时m分s秒` 和 'Y年M月D日'
 * @param {String} format 返回日期时间的格式
 * @param {Number} time 传入时间戳 默认当前时间
 * @param {String} lang 语言
 * @return {String}
 */
export function formatTime( format = 'YYYY-MM-DD hh:mm:ss',time = 0, lang = 'zh-CN') {

  testLang(lang)
  testDateFormat(format)

  const now = new Date().getTime()
  if (!time) time = now
  while (time.toString().length < 13) time += '0'
  const date = new Date(parseInt(time))
  /* 补0 */
  const formatNumber = (n)=>{
    const str = n.toString()
    return str[1] ? str : `0${str}`
  }
  /* 参数集 年-月-日 时:分:秒 */
  const arg = {
    year: date.getFullYear(),
    month: formatNumber(date.getMonth() + 1),
    day: formatNumber(date.getDate()),
    hours: formatNumber(date.getHours()),
    minutes: formatNumber(date.getMinutes()),
    seconds: formatNumber(date.getSeconds())
  }

  /* 判断有没有指定的时间格式 */
  switch (format) {
    case 'Y年M月D日 h时m分s秒':
      return `${arg.year}年${date.getMonth()+1}月${date.getDate()}日 ${arg.hours}时${arg.minutes}分${arg.seconds}秒`
    case 'Y年M月D日':
      return `${arg.year}年${date.getMonth()+1}月${date.getDate()}日`
    case 'YYYY-MM-DD hh:mm:ss':
    default:
      return `${arg.year}-${arg.month}-${arg.day} ${arg.hours}:${arg.minutes}:${arg.seconds}`
    case 'YYYY/MM/DD hh:mm:ss':
      return `${arg.year}/${arg.month}/${arg.day} ${arg.hours}:${arg.minutes}:${arg.seconds}`
    case 'YYYY-MM-DD':
      return `${arg.year}-${arg.month}-${arg.day}`
    case 'YYYY/MM/DD':
      return `${arg.year}-${arg.month}-${arg.day}`
    case 'YYYY-MM':
      return `${arg.year}-${arg.month}`
    case 'YYYY/MM':
      return `${arg.year}/${arg.month}`
    case 'MM-DD':
      return `${arg.month}-${arg.day}`
    case 'MM/DD':
      return `${arg.month}/${arg.day}`
    case 'hh:mm:ss':
      return `${arg.hours}:${arg.minutes}:${arg.seconds}`
    case 'hh:mm':
      return `${arg.hours}:${arg.minutes}`
    case 'computed'://判断是不是需要进行计算
    case 'timeAgo':
      if (now >=time) {
        const langStr = Lang[lang]['date']
        const dt = Math.abs(time - now),    //时间已过去多少毫秒
          S = dt / 1000,    //秒
          M = S / 60,  //分
          H = M / 60,  //小时
          D = H / 24,   //天
          W = D / 7,    //周
          m = D / 31, // 月
          Y = D / 365 // 年
        if (~~Y > 0 && Y < 3) {
          return ~~Y + (Y>1 ? langStr['years_ago'] :langStr['year_ago'])
        } else if (~~m > 0 && m < 12) {
          return ~~m + (m>1 ? langStr['months_ago'] :langStr['month_ago'])
        } else if (~~W > 0 && W < 3) {
          return ~~W + (W>1 ? langStr['weeks_ago'] :langStr['week_ago'])
        } else if (D < 7 && ~~D > 0) {
          return ~~D + (D>1 ? langStr['days_ago'] : langStr['day_ago'])
        } else if (~~H > 0 && H < 24) {
          return ~~H + (H>1 ? langStr['hours_ago'] : langStr['hour_ago'])
        } else if (~~M > 0 && M < 60) {
          return ~~M + (M>1 ? langStr['minutes_ago'] : langStr['hour_ago'])
        } else if (~~S > 0 && S < 60) {
          return ~~S + (S>1 ? langStr['seconds_ago'] :langStr['second_ago'])
        } else if(~~S == 0){
          return Lang[lang]['date']['just']
        }
      } else {
        console.warn('This is Future\'s time')
      }
      return `${arg.year}-${arg.month}-${arg.day} ${arg.hours}:${arg.minutes}:${arg.seconds}`
  }
}


/**
* changeTimezone 更改时区时间
* @since 1.0.0
*        1.0.2 update:修改传入顺序
* @param {Number} timezone 传入需要转换的时区
* @param {Number} time 时间戳
* @return {Number} 该地区当前时间戳
*/
export function changeTimezone(timezone,time = 0){
  testTimeZone(timezone)
  while (time!=0 && time.toString().length < 13) time += '0'
  time = parseInt(time)
  let offset_GMT = new Date(time).getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟
  let nowDate = time ? time : new Date().getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
  return  nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000
}
