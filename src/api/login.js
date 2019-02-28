import request from '@/utils/request'

//初始化/检索报关单表头List
export function searchDeclareHeadListByEntryID(entryID) {
    return request({
        url: '/api/entryInfo/queryEntryList',
        method: 'post',
        data: {
            'entryId' : entryID
        }
    })
}

//获取商品项List
export function getDeclareGoodList(entryID) {
    return request({
        url: '/api/entryInfo/queryGoodsList',
        method: 'post',
        data: {
            'entryId' : entryID
        }
    })
}

//获取集装箱信息List
export function getDeclareBoxList(entryID) {
    return request({
        url: '/api/entryInfo/queryContainnerList',
        method: 'post',
        data: {
            'entryId' : entryID
        }
    })
}

//获取海关计税List
export function getCustomsTaxList(entryID) {
    return request({
        url: '/api/entryInfo/queryTaxList',
        method: 'post',
        data: {
            'entryId' : entryID
        }
    })
}

//获取报关单随附单据List
export function getdeclareBillList(entryID) {
    return request({
        url: '/api/entryInfo/queryDocuList',
        method: 'post',
        data: {
            'entryId' : entryID
        }
    })
}