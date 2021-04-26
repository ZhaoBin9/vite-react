import instance from './instance'
import { AxiosResponse } from 'axios'
import type { IAxiosRequestConfig } from './instance'
import qs from 'qs'
interface RequestConfig extends IAxiosRequestConfig {
  isHandleError?: boolean;
  isCanceled?: boolean;
  msg?: string;
}


type GolbalThis = Window & typeof globalThis
interface WindowThis extends GolbalThis {
  callback: (result: AxiosResponse) => void
}

const request = async (options: RequestConfig): Promise<AxiosResponse> => {
  const baseOptions: RequestConfig = {
    method: 'get',
    isHandleError: true,
    isCanceled: false,
    ...options
  }

  try {
    if (options.type === 'jsonp') {
      const jsonp = (): Promise<AxiosResponse> => {
        return new Promise((resolve) => {
          (window as WindowThis).callback = (result: AxiosResponse) => {
            resolve(result.data)
          }
          if (options.params) {
            options.url = options.url + '?' + qs.stringify(options.params)
            delete options.params
          }
          let JSONP=document.createElement('script');
          JSONP.type='text/javascript';
          JSONP.src=`${options.url}`;
          document.getElementsByTagName('head')[0].appendChild(JSONP);
          setTimeout(() => {
            document.getElementsByTagName('head')[0].removeChild(JSONP)
          }, 500)
        })

      }
      return jsonp()
    }
    const res = await instance(baseOptions)
    return res
  } catch (error) {
    if (baseOptions.isHandleError && !baseOptions.isCanceled) {

    }
    return error
  }
}


export default request