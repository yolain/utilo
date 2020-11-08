describe('String',()=> {

  describe('trim()', () => {
    it('去除空格', () => {
      let str = ' find a girl '
      assert(Utilo.trim(str) == 'findagirl')
      assert(Utilo.trim(str,2) == 'find a girl')
      assert(Utilo.trim(str,3) == 'find a girl ')
      assert(Utilo.trim(str,4) == ' find a girl')
    })
  })
})
