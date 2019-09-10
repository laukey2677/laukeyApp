const defaultState = {
  data:[
    {
      productId:999,
      product: {
        imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        name: '雨伞',
        number: 25,
        addList: [
          {
            addName: '卓越世纪中心3号楼35楼',
            num: 10
          },
          {
            addName: '卓越世纪中心3号楼35楼',
            num: 10
          }
        ]
      }
    }
  ]
};

export default (state = defaultState, action) => {
  return state;
}