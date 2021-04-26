import request from '../axios/index'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { PastActivityParams } from 'types/apis/home'

const defaultsConfig: AxiosRequestConfig = {
  transformResponse: (resopnse: string): AxiosResponse => {
    const result = JSON.parse(resopnse).data
    return result
  }
}

axios.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
  return response
})

const baseUrl = 'https://prewww.shangjingu.cn/api/api/'

export function fetchTestPastActivity(params: { pageIndex?: number } = {}) {
  const mergeParams: PastActivityParams = { classId: 16, pageSize: 12, pageIndex: 1, prevOrNext: false, ...params }
  return request({
    url: baseUrl + 'activity',
    method: 'get',
    params: mergeParams
  })
}

export function fetchTestNews<T>(params: { pageIndex: number }) {
  return axios.get<T, T>(`${baseUrl}class/all?id=26&pageIndex=${params.pageIndex}&pageSize=5`, defaultsConfig)
}

export function fetchTestNewsDetail<T>(id: number) {
  return axios.get<T, T>(`${baseUrl}article/${id}`, defaultsConfig)
}