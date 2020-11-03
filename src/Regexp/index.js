module.exports = {
  // 手机号
  phone:/^1[3|4|5|6|7|8|9][0-9]{9}$/,
  // 座机
  tel:/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,
  // 身份证
  idcard:/(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
  // 普通：以字母开头，长度在6~18之间，只能包含字母、数字和下划线
  password:/^[a-zA-Z]\w{5,17}$/,
  // 最强：至少8个字符，至少1个大写字母，1个小写字母，1个数字和1个特殊字符
  strongest:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
  // 强：至少8个字符，至少1个字母，1个数字和1个特殊字符：
  strong:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
  // 中：字母+数字，字母+特殊字符，数字+特殊字符
  middle:/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/,
  // 弱：纯数字，纯字母，纯特殊字符
  week:/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/,
  // 特殊字符
  spec:/(?=(?:.*?[!@#$%*()_+^&}{:;?\,\<\>\/\.\\\]\[\=\-\|\"\'\~]){1})/,
  // 邮政编码
  postal:/[1-9]\d{5}(?!\d)/,
  // 邮箱
  email:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  // ip
  ip:/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
  // 日期时间
  datetime:/^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/,
  // 日期
  date:/^(\d{4})\-(\d{2})\-(\d{2})$/,
  // 数字
  digit:/^[0-9]{1,42}$/,
  number:/(?=(?:.*?\d){1})/,
  // 中文
  chinese:/^[\u4E00-\u9FA5]+$/,
  // 英文
  english:/^[a-zA-Z]+$/,
  // 小写
  lower:/^[a-z]+$/,
  // 大写
  upper:/^[A-Z]+$/,
  // html
  html:/<("[^"]*"|'[^']*'|[^'">])*>/
}
