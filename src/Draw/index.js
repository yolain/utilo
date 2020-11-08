// 简单绘图库

/**
* createDraw 创建画布
* @since 1.0.0
* @param {String} id 元素id
* @param {Number} width 宽度
* @param {Number} height 高度
* @return {context}
*/
export function createDraw(id,width,height){
  let c = document.getElementById(id)
  c.width = width
  c.height = height
  return c.getContext("2d")
}

/**
* drawText 写入文字
* @since 1.0.0
* @param {context} ctx
* @param {Number} x x坐标
* @param {Number} y y坐标
* @param {String} text 文字内容
* @param {Number} size 文字大小
* @param {String} align 对齐方式 默认左对齐(left,right,center)
* @param {String} color 文字颜色值 默认为黑色
* @param {String} family 文字字体 默认为微软雅黑
*/
export function drawText(ctx,x,y,text = '一段文字',size = 35,align = 'left',color = '#000',family  = "微软雅黑"){
  ctx.save();
  ctx.font = size + 'px '+ family
  ctx.textAlign = align
  ctx.fillStyle = color
  ctx.fillText(text,x,y)
  ctx.restore();
}

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
export function drawRoundRect(ctx, x, y, width, height, radius,color = '#000',border =0, borderColor ='#000') {
  //圆的直径必然要小于矩形的宽高
  if (2 * radius > width || 2 * radius > height) return false;
  ctx.save();
  ctx.translate(x, y);
  //绘制圆角矩形的各个边
  getRectPath(ctx, width, height, radius);
  if(border && borderColor){
    ctx.lineWidth = border;
    ctx.strokeStyle = borderColor;
    ctx.stroke();
  }
  if(color){
    ctx.fillStyle = color;
    ctx.fill();
  }
  ctx.restore();
}

function getRectPath(ctx, width, height, radius) {
  ctx.beginPath(0);
  //从右下角顺时针绘制，弧度从0到1/2PI
  ctx.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
  //矩形下边线
  ctx.lineTo(radius, height);
  //左下角圆弧，弧度从1/2PI到PI
  ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
  //矩形左边线
  ctx.lineTo(0, radius);
  //左上角圆弧，弧度从PI到3/2PI
  ctx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);
  //上边线
  ctx.lineTo(width - radius, 0);
  //右上角圆弧
  ctx.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);
  //右边线
  ctx.lineTo(width, height - radius);
  ctx.closePath();
  ctx.restore();
}
