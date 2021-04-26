import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

const instance = axios.create({
  timeout: 1000000,
  withCredentials: true
})

function objectToFormData(obj: { [propName: string]: any } = {}): FormData {
  const formData = new FormData()
  Object.keys(obj).forEach(key => {
    obj[key] !== null && obj[key] !== undefined && formData.append(key, obj[key])
  })
  return formData
}

export interface IAxiosRequestConfig extends AxiosRequestConfig {
  type?: 'json' | 'jsonp';
}

instance.interceptors.request.use((config: IAxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const { method, params, data, type } = config
  config.headers = Object.assign(
    method?.toLocaleLowerCase() === 'get'
      ?
      {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      :
      {
        'Content-Type': 'multipart/form-data;charset=UTF-8'
      },
    config.headers)
  if (method?.toLocaleLowerCase() === 'get' && params) {
    config.url = config.url + '?' + qs.stringify(params)
    delete config.params
  }
  if (data) {
    if (type === 'json') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    config.data = type === 'json' ? JSON.stringify(data) : objectToFormData(data)
  }
  return Promise.resolve(config)
})
instance.interceptors.response.use((response: AxiosResponse): Promise<AxiosResponse> => {
  return Promise.resolve(response.data)
})

export default instance