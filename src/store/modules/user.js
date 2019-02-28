import { searchDeclareHeadListByEntryID,getDeclareGoodList,getDeclareBoxList,getCustomsTaxList,getdeclareBillList } from '@/api/login';

const user = {

  actions: {
    //初始化报关单表头List
    // getDeclareHeadList() {
    //   return new Promise((resolve, reject) => {
    //       getDeclareHeadList().then(response => {
    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    //检索报关单表头List
    searchDeclareHeadListByEntryID({ commit },entryID){
      return new Promise((resolve, reject) => {
        searchDeclareHeadListByEntryID(entryID).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    //获取商品项List
    getDeclareGoodList({ commit },entryID){
      return new Promise((resolve, reject) => {
        getDeclareGoodList(entryID).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    //获取集装箱信息List
    getDeclareBoxList({ commit },entryID){
      return new Promise((resolve, reject) => {
        getDeclareBoxList(entryID).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    //获取集装箱信息List
    getCustomsTaxList({ commit },entryID){
      return new Promise((resolve, reject) => {
        getCustomsTaxList(entryID).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    //获取报关单随附单据List
    getdeclareBillList({ commit },entryID){
      return new Promise((resolve, reject) => {
        getdeclareBillList(entryID).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
