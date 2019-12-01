import request from '@/utils/request'

export function searchDeclareHeadListByEntryID(entryID) {
    return request({
        url: '/api/entryInfo/queryEntryList',
        method: 'post',
        data: {
            'entryId' : entryID
        }
    })
}