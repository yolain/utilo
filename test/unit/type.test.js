describe('Type',()=> {

  describe('#isIdCard()', () => {
    it('是否为身份证号（严格模式）', () => {
      assert(Utilo.isIdCard('11010119900307771X',true) == false)
    })
    it('是否为身份证号', () => {
      assert(Utilo.isIdCard('11010119900307771X') == true)
    })
  })
})
