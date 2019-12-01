import { searchDeclareHeadListByEntryID } from '@/api/login';

const user = {

  actions: {
    searchDeclareHeadListByEntryID({ commit },entryID){
      return new Promise((resolve, reject) => {
        searchDeclareHeadListByEntryID(entryID).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

export default user
