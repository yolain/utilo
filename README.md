## utilo

[![npm](https://img.shields.io/npm/v/utilo.svg)](https://www.npmjs.com/package/utilo) 


前端业务开发中多个项目会频繁使用到可复用的工具类函数，为了避免不同项目中因变动而重复拷贝，参考并整合一个可实用的工具库。

### 安装
``` bash
$ npm i utilo -S
```

### 全局使用
``` js
import Vue from 'vue'
import Utilo from 'utilo'
Vue.prototype.utilo = Utilo
```

### 按需引入
```js
import {formatTime} from 'utilo' // 引入格式化时间模块 
import {bankcard as bank} from "utilo"; // 如遇命名问题可使用
```

### [Array] (数组)

#### chunk 数组拆分

```js
import {chunk} from 'utilo'
/**
* chunk 数组拆分
* @since 1.0.0
* @param {Array} array 待拆分数组
* @param {Number} size 数量
* @return {Array}
*/
chunk([1,2,3,4,5],2)  // => [[1,2],[3,4],[5]] 
```

#### sort 数组排序
```js
import {sort} from 'utilo'
/**
* sort 数组排序
* @since 1.0.0
* @param {Array} array 待排序数组
* @param {Number} type 1:从小到大 2:从大到小 3:随机
* @param {String} key 根据键值排序 默认为空
* @return {Array}
*/
sort([4,2,3,1,5],1)   // => [1,2,3,4,5]
sort([4,2,3,1,5],2)   // => [5,4,3,2,1]
// 键值
let array = [{id:1,value:10},{id:2,value:8},{id:3,value:"12"}]
sort(array,1,'value') // => [{id:2,value:8},{id:1,value:10},{id:3,value:"12"}]
```

#### unique 数组去重
```js
import {unique} from 'utilo'
/**
* unique 数组去重
* @since 1.0.0
* @param {Array} array 待去重数组
* @return {Array}
*/
unique([1,2,3,2,0]) // => [1,2,3,0]
```

### [Clone] (克隆) 

#### clone 浅拷贝
```js
import {clone} from 'utilo'
/**
* clone 浅拷贝
* @since 1.0.0
*        1.0.2 rename:clone
* @param {Object | Array} data
* @return {Object | Array}
*/
clone({a:1,b:2})
```
#### deepCopy 深拷贝
```js
import {deepCopy} from 'utilo'
/**
* deepCopy 深拷贝
* @since 1.0.0
*        1.0.2 rename:deepCopy
* @param {Object | Array} data
* @return {Object | Array}
*/
deepCopy([{a:1,b:2},{c:3,d:4}])
```

### [Date] (日期与时间) 

#### formatTime 格式化日期与时间

`time` 需传入时间戳（秒级/毫秒级皆可）

`format` 可传入的类型有：

* YYYY-MM-DD hh:mm:ss
* YYYY/MM/DD hh:mm:ss
* Y年M月D日 h时m分s秒 `v1.0.2`
* Y年M月D日 `v1.0.2`
* YYYY-MM-DD
* YYYY/MM/DD
* MM-DD
* MM/DD
* hh:mm:ss
* hh:mm
* computed 或 timeAgo `例：50分钟前`

```js
import {formatTime} from 'utilo'
/**
 * formatTime 格式化日期与时间
 * @since 1.0.0
 *        1.0.2 add:`format` 类型 `Y年M月D日 h时m分s秒` 和 'Y年M月D日'
 * @param {String} format 返回日期时间的格式
 * @param {Number} time 传入时间戳（默认当前时间）
 * @param {String} lang 语言 (当前版本仅支持 en-US、zh-CN 默认中文)
 * @return {String}
 */
formatTime() // 输出当前时间 -> 2020-11-04 12:00:00 

let time = parseInt(new Date().getTime())-3000
formatTime('timeAgo',time,'en-US') // -> 3 seconds ago
```
#### changeTimezone 切换时区

```js
import {changeTimezone} from 'utilo'
/**
* changeTimezone 更改时区时间
* @since 1.0.0
*        1.0.2 update:修改传入顺序
* @param {Number} timezone 传入需要转换的时区
* @param {Number} time 时间戳（默认当前时间）
* @return {Number} 该地区当前毫秒级时间戳
*/
// 假设当前为北京时间 2020-11-21 16:00:00 需要切换到东京时间
changeTimezone(9) // => 1605949200000
```

### [Dom] (文档对象) 

#### getScrollTop 获取滚动条距离

```js
import {getScrollTop} from 'utilo'
/**
* getScrollTop 获取滚动条距离
* @since 1.0.0
* @return {Number}
*/
getScrollTop() 
```

#### setScrollTop 设置滚动条到顶部的距离

```js
import {setScrollTop} from 'utilo'
/**
* setScrollTop 设置滚动条到顶部的距离
* @since 1.0.0
* @param {Number} value 距离
* @return {Number}
*/
setScrollTop(100) // 滚动到离顶部100的距离
```

#### scrollTo 滚动到某个位置(动画)

```js
import {scrollTo} from 'utilo'
/**
* scrollTo 在${duration}ms时间内，滚动条平滑滚动到${to}指定位置
* @since 1.0.0
* @param {Number} to 距离
* @param {Number} duration  毫秒
*/
scrollTo(100,300) // 300ms时间从0滚动到100
```

#### offset 获取元素的距离document的位置

```js
import {offset} from 'utilo'
/**
* offset 获取元素的距离document的位置
* @since 1.0.0
* @param {HTMLElement} ele
* @return { {left:Number,top:Number} }
*/
offset(this.$refs.element) // -> {left:0,top:200}
```
#### windowResize 软键盘缩回、弹起回调

```js
import {resize} from 'utilo'
/**
* windowResize 软键盘缩回、弹起回调
* 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
* @since 1.0.0
* @param {Function} downCb 当软键盘弹起后，缩回的回调
* @return {Function} upCb 当软键盘弹起的回调
*/
resize(func1,func2)
```

### [Draw] (基础绘图) 

#### createDraw 创建画布
```js
import {createDraw} from 'utilo'
/**
* createDraw 创建画布
* @since 1.0.0
* @param {String} 元素id
* @param {Number} width 宽度
* @param {Number} height 高度
* @return {context}
*/
let cxt = createDraw()
```

#### drawText 写上文字
```js
import {drawText} from 'utilo'
/**
* drawText 写上文字
* @since 1.0.0
* @param {String} 元素id
* @param {Number} width 宽度
* @param {Number} height 高度
* @return {context}
*/
drawText(ctx,0,100,'你好')
```

#### drawRoundRect 圆矩/圆形
```js
import {drawRoundRect} from 'utilo'
/**
 * drawRoundRect 圆矩形或圆形（填充）
 * @since 1.0.0
 * @param {context} ctx
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {Number} width 宽度
 * @param {Number} height 高度
 * @param {Number} radius 弧度
 * @param {String} color 填充色 默认为黑色
 * @param {String} border 边框大小 默认为0
 * @param {String} borderColor 边框色 默认为黑色（需先设置边框大小）
 */
drawRoundRect(ctx,0,100,200,200,100) // 大小200px的黑色圆形
drawRoundRect(ctx,0,100,200,200,30) // 大小200px弧度30px的黑色圆矩
```

### [Format] (格式化)  

#### toDecimal 保留小数点几位 (四舍五入)

```js
import {toDecimal} from 'utilo'
/**
* toDecimal 保留小数点${x}位 (会四舍五入)
* @since 1.0.0
* @param {Number} x
* @param {Number} val
* @return {Number}
*/
toDecimal(1.0088,3) // -> 1.009 
```

#### toFloat 保留小数点几位 (截断)

```js
import {toFloat} from 'utilo'
/**
* toFloat 保留小数点${x}位 (截断)
* @since 1.0.0
* @param {Number} x
* @param {Number | String} val
* @return {Number}
*/
toFloat(1.0088,3) // -> 1.008
```

#### filterZero 抹零

```js
import {filterZero} from 'utilo'
/**
* filterZero 抹零
* @since 1.0.0
* @param {Number | String} val
* @return {Number}
*/
filterZero(1.200) // -> 1.2
```

#### money 千分位

```js
import {money} from 'utilo'
/**
* money 千分位
* @since 1.0.0
* @param {Number | String} val 值
* @param {Number | String} x 保留小数点位数
* @return {String}
*/
money(13400) // -> 13,400
```

#### percent 百分比

```js
import {percent} from "utilo";
/**
* percent 百分比
* @since 1.0.0
* @param {Number | String} val 值
* @return {String}
*/
percent(0.66) // -> 66%
```

#### hidden 隐藏字符

```js
import {hidden} from "utilo";
/**
* hidden 隐藏字段
* @since 1.0.0
* @param {String} str
* @return {String}
*/
hidden(100) // -> *****
```

#### bankcard 格式化银行卡

```js
import {bankcard} from 'utilo'
/**
* bankcard 格式化银行卡
* @since 1.0.0
* @param {String | Number} val
* @return {String}
*/
bankcard(6221882600114166800) // -> '6221 8826 0011 4166 800'
```

#### plusStr 在字段中间加特殊字符
```js
import {plusStr} from 'utilo'
/**
* plusStr 在字段中间加特殊字符
* @since 1.0.0
* @param {String} str
* @param {Number} frontLen 起始不被遮盖的长度
* @param {Number} endLen 结尾不被遮盖的长度
* @param {String} hideStr 遮盖字符
* @return {String}
*/
plusStr('18812340000',3,4) //-> 188****0000
```

### [Function] (函数) 

#### throttle 函数节流

#### debounce 函数防抖

### [Keycode] (按键值) 

#### getKeyName 根据keycode获得键名


### [Number] (数字) 

#### rand 随机数

#### accAdd 高精度加法

#### accSub 高精度减法

#### accMul 高精度乘法

#### accDiv 高精度除法 



### [Password] (密码) 

#### pwdLevel 获取密码强度


### [Regexp] (正则) 


### [String] (字符串) 

#### trim 去除空格

#### changeCase 变换书写形式

#### filterTag 过滤html标签


### [Type] (类型) 

#### typeOf 类型
#### isString 是否为字符串
#### isNumber 是否为数字
#### isObject 是否为对象
#### isArray 是否为数组
#### isBoolean 是否为布尔值
#### isFalse 是否为假
#### isTrue 是否为真
#### isUndefined 是否为undefined
#### isNull 是否为null
#### empty 是否为空
#### isIdCard 是否为身份证号


### [Ua] (浏览器标识) 

#### getLanguage 获取浏览器语言
#### getEngine 获取浏览器引擎
#### getOs 获取操作系统
#### getOsVersion 获取操作系统版本
#### getDevice 获取设备UA
#### getIEVersion 获取IE版本
#### isIE 是否为IE浏览器
#### isPC 是否为PC
#### isMac 是否为MAC系统
#### isWin 是否为WIN系统
#### isTablet
#### isMobile 是否为移动端
#### isAndroid 是否为安卓
#### isIos 是否为Ios
#### isApp 是否为App
#### isCanvas 是否为canvas
#### isWebgl
#### isSvg
#### isWebsocket,
#### isWorker
#### isLocalStorage
#### isGeolocation
#### isFile

### [Url] (链接参数) 

#### toQueryString URL参数转对象

#### stringify 对象序列化

[Array]:https://github.com/yolain/U/blob/main/src/Array/index.js
[Clone]:https://github.com/yolain/U/blob/main/src/Clone/index.js
[Date]:https://github.com/yolain/U/blob/main/src/Date/index.js
[Dom]:https://github.com/yolain/U/blob/main/src/Dom/index.js
[Draw]:https://github.com/yolain/U/blob/main/src/Draw/index.js
[Format]:https://github.com/yolain/U/blob/main/src/Format/index.js
[Function]:https://github.com/yolain/U/blob/main/src/Function/index.js
[Keycode]:https://github.com/yolain/U/blob/main/src/Keycode/index.js
[Number]:https://github.com/yolain/U/blob/main/src/Number/index.js
[Password]:https://github.com/yolain/U/blob/main/src/Password/index.js
[Random]:https://github.com/yolain/U/blob/main/src/Random/index.js
[Regexp]:https://github.com/yolain/U/blob/main/src/Regexp/index.js
[String]:https://github.com/yolain/U/blob/main/src/String/index.js
[Type]:https://github.com/yolain/U/blob/main/src/Type/index.js
[Ua]:https://github.com/yolain/U/blob/main/src/Ua/index.js
[Url]:https://github.com/yolain/U/blob/main/src/Url/index.js


