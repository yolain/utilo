describe('String:API',()=> {

  describe('#trim()', () => {
    it('返回正确去除空格的字符串', () => {
      let str = ' find a girl '
      assert(Utilo.String.trim(str) == 'findagirl')
      assert(Utilo.String.trim(str,2) == 'find a girl')
      assert(Utilo.String.trim(str,3) == 'find a girl ')
      assert(Utilo.String.trim(str,4) == ' find a girl')
    })
  })
})
