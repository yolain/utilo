import {empty, isArray} from "../Type";

export function testArray(array){
  if(!isArray(array)){
    throw new Error('请传入数组')
  }
}

export function testInclude(value,array){
  if(!isArray(array)){
    throw new Error('请传入需包含的区间数组')
  }
  if(!array.includes(value)){
    throw new Error('不在可选参数范围，'+array.toString())
  }
}

export function testDateFormat(value){
  testInclude(value,
['YYYY-MM-DD hh:mm:ss', 'YYYY/MM/DD hh:mm:ss',
      'YYYY-MM-DD', 'YYYY/MM/DD',
      'MM-DD', 'MM/DD', 'hh:mm:ss', 'hh:mm',
      'computed', 'timeAgo'
  ])
}
export function testLang(value){
  testInclude(value,['zh-CN','en-US'])
}
export function testTimeZone(value){
  if(empty(value) || parseInt(value)>12 || parseInt(value)<-12){
    throw new Error('传入时区有误，请传入 -12 ~ 12 之间的数字')
  }
}
