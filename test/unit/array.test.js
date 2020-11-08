describe('Array',()=> {

  describe('chunk()',()=>{

    it('分割数组',()=>{
      let arr = [1,2,3,4,5]
      let size = 2
      let arr_result = [[1,2],[3,4],[5]]
      assert(JSON.stringify(Utilo.chunk(arr,size)) == JSON.stringify(arr_result))
    });
  })

  describe('sort()',()=>{
    let arr = [4,2,3,1,5]
    it('从小到大排序',()=>{
      assert(JSON.stringify(Utilo.sort(arr,1)) == JSON.stringify([1,2,3,4,5]))
    });
    it('从小到大排序',()=>{
      assert(JSON.stringify(Utilo.sort(arr,2)) == JSON.stringify([5,4,3,2,1]))
    })
    it('根据键值排序',()=>{
      let arr = [{id:"2",value:10},{id:1,value:8},{id:3,value:"12"}]
      let result = [{id:1,value:8},{id:"2",value:10},{id:3,value:"12"}]
      assert(JSON.stringify(Utilo.sort(arr,1,'value')) == JSON.stringify(result))
    });
  })

  describe('unique()',()=>{
    it('数组去重',()=>{
      let arr = [1,2,3,2,0]
      assert(JSON.stringify(Utilo.unique(arr)) == JSON.stringify([1,2,3,0]))
    });
  })

});
