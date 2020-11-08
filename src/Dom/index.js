/**
* getScrollTop 获取滚动条距离
* @since 1.0.0
* @return {Number}
*/
export function getScrollTop() {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

/**
* setScrollTop 设置滚动条到顶部的距离
* @since 1.0.0
* @param {Number} value
* @return {Number}
*/
export function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
}

/**
* scrollTo 在${duration}ms时间内，滚动条平滑滚动到${to}指定位置
* @since 1.0.0
* @param {Number} to
* @param {Number} duration
*/
export function scrollTo(to,duration){
  if (duration < 0) {
    setScrollTop(to);
    return
  }
  let diff = to - getScrollTop();
  if (diff === 0) return
  let step = diff / duration * 10;
  requestAnimFrame(
    () => {
    if (Math.abs(step) > Math.abs(diff)) {
      setScrollTop(getScrollTop() + diff);
      return;
    }
    setScrollTop(getScrollTop() + step);
    if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
      return;
    }
    scrollTo(to, duration - 16);
  });
}
const requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

/**
* offset 获取元素的距离document的位置
* @since 1.0.0
* @param {HTMLElement} ele
* @return { {left:Number,top:Number} }
*/
export function offset(ele) {
  let pos = {
    left: 0,
    top: 0
  };
  while (ele) {
    pos.left += ele.offsetLeft;
    pos.top += ele.offsetTop;
    ele = ele.offsetParent;
  };
  return pos;
}

/**
* resize 软键盘缩回、弹起回调
* 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
* @since 1.0.0
*        1.0.2 rename:resize
* @param {Function} downCb 当软键盘弹起后，缩回的回调
* @return {Function} upCb 当软键盘弹起的回调
*/
function resize(downCb, upCb) {
  const clientHeight = window.innerHeight;
  downCb = typeof downCb === 'function' ? downCb : function () {}
  upCb = typeof upCb === 'function' ? upCb : function () {}
  window.addEventListener('resize', () => {
    const height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    }
    if (height < clientHeight) {
      upCb();
    }
  });
}
