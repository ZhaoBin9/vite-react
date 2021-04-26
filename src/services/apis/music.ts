import request from '../axios/index'
import type { MusicSongidParams, MusicSongidParamsFn, MusicSongVkeyParamsFn, MusicSongVKeyParams } from 'types/apis/music'

const baseUrl = '/api'

export function fetchMusicSongid(params: { query?: string  } = {}) {
  const mergeParams: { query: string, method: 'baidu.ting.search.common' } = {
    query: 'keep you',
    method: 'baidu.ting.search.common',
    ...params
  }
  // p页数 n数量
  return request({
    url: baseUrl + 'ting',
    method: 'get',
    isHandleError: true,
    // type: 'jsonp',
    params: mergeParams
  })
}

// 搜索歌曲的song Vkey
export function fetchMusicSongVKey(params: MusicSongVkeyParamsFn) {
  const mergeParams: MusicSongVKeyParams = { format: 'json205361747', platform: 'yqq', cid: 205361747, guid: '000000000', ...params }
  return request({
    url: baseUrl + 'base/fcgi-bin/fcg_music_express_mobile3.fcg',
    method: 'get',
    isHandleError: true,
    // type: 'jsonp',
    params: mergeParams
  })
}