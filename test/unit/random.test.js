describe('Random',()=>{

  describe('nickname',()=>{
    it('随机生成昵称',()=>{
      console.log('随机昵称：'+Utilo.nickname('zh-CN'))
      assert.ok(Utilo.nickname('zh-CN'))
    })
  })

  describe('name',()=>{
    it('随机生成姓名',()=>{
      console.log('随机姓名：'+Utilo.name('zh-CN'))
      assert.ok(Utilo.name('zh-CN'))
    })
  })
})
