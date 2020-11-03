// 简单绘图库

// 开始画
export function createDraw(dom,width,height){
  let c = document.getElementById(dom)
  c.width = width
  c.height = height
  return c.getContext("2d")
}
// 添加文字
export function drawText(ctx,x,y,text = '一段文字',size = 35,align = 'left',fill = '#000',family  = "微软雅黑"){
  ctx.save();
  ctx.font = size + 'px '+ family
  ctx.textAlign = align
  ctx.fillStyle = fill
  ctx.fillText(text,x,y)
  ctx.restore();
}
// 圆矩(填充)
export function drawRoundRect(ctx, x, y, width, height, radius,fillColor = '#000') {
  //圆的直径必然要小于矩形的宽高
  if (2 * radius > width || 2 * radius > height) return false;
  ctx.save();
  ctx.translate(x, y);
  //绘制圆角矩形的各个边
  getRectPath(ctx, width, height, radius);
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.restore();
}

// 圆矩(边框)
export function drawRoundRectBorder(cxt, x, y, width, height, radius,lineWidth =2, strokeColor ='#000') {
  //圆的直径必然要小于矩形的宽高
  if (2 * radius > width || 2 * radius > height) { return false; }
  cxt.save();
  cxt.translate(x, y);
  //绘制圆角矩形的各个边
  getRectPath(cxt, width, height, radius);
  cxt.lineWidth = lineWidth;
  cxt.strokeStyle = strokeColor;
  cxt.stroke();
  cxt.restore();
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
