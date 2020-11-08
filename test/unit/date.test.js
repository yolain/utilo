describe('Date',()=> {
  describe('#formatTime()',()=>{
    it('格式化时间 ',()=>{
      // assert.ok('当前时间:'+Utilo.formatTime())
      // assert.ok('发布在 '+Utilo.formatTime(0,'timeAgo'))
      // assert.ok('发布于 '+Utilo.formatTime(parseInt(new Date().getTime())-86400*(10**4),'timeAgo'))
      // assert.ok('Publish at '+Utilo.formatTime(parseInt(new Date().getTime())-3000,'timeAgo','en-US'))
    })
  })

  describe('#changeTimezone()',()=>{
    it('切换时区',()=>{
      assert.ok(Utilo.changeTimezone(9))
    })
  })
})
