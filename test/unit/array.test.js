describe('Array:API',()=> {

  describe('#chunk()',()=>{
    it('返回分割的数组',()=>{
      let arr = [1,2,3,4,5]
      let size = 2
      let arr_result = [[1,2],[3,4],[5]]
      assert(JSON.stringify(Utilo.Array.chunk(arr,size)) == JSON.stringify(arr_result))
    })
  })

  describe('#sort()',()=>{
    it('简单排序',()=>{
      let arr = [4,2,3,1,5]
      assert(Utilo.Array.sort(arr,1))
      assert(Utilo.Array.sort(arr,2))
      assert(Utilo.Array.sort(arr,3))
    })
    it('键值对排序',()=>{
      let arr = [{id:"2",value:10},{id:1,value:8},{id:3,value:"12"}]
      assert(Utilo.Array.sort(arr,1,'value'))
      assert(Utilo.Array.sort(arr,2,'value'))
      assert(Utilo.Array.sort(arr,3,'value'))
    })
  })

  describe('#unique()',()=>{
    it('数组去重',()=>{
      let arr = [1,2,3,2,0],arr_result = [1,2,3,0]
      assert(JSON.stringify(Utilo.Array.unique(arr)) == JSON.stringify(arr_result))
    })
  })

});
