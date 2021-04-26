import React, { ReactElement, useEffect, useState } from 'react'
import { fetchTestNewsDetail } from 'apis/home'
import { useLocation } from 'react-router'
import 'style/Article/index.less'

interface FetchResponseData {
  title: string;
  content: string;
  [propName: string]: string | number | null
}

interface FetchResponseTypes {
  code: number;
  data: FetchResponseData;
  success: boolean;
}

const Article = (): ReactElement => {
  const location = useLocation()
  const [current, setCurrent] = useState<FetchResponseData | null>(null)
  useEffect(() => {
    const searchId = [...new URLSearchParams(location.search).values()][0]
    fetchTestNewsDetail<FetchResponseTypes>(~~searchId).then(res => {
      setCurrent(res.data)
    })
  }, [])
  return <section className="article">
    <div className="text-2xl text-center mb-4">{current?.title}</div>
    <div className="describe" dangerouslySetInnerHTML={{ __html: current?.content || '--' }} />
  </section>
}

export default Article