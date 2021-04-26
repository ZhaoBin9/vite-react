import React, { ReactElement, useEffect, useState } from 'react'
import { fetchTestNews } from 'apis/home'
import type { TabListItem, TabData } from '../TabBox'

const NoticeCard = (): ReactElement => {
  const [noticeList, setNoticeList] = useState<TabListItem[]>([])
  useEffect(() => {
    fetchTestNews<TabData>({ pageIndex: 1 }).then(res => {
      setNoticeList(res.data.data.slice(0, 4))
    })
  }, [])
  return (
    <div className="notice-box border-box p-6 bg-white rounded">
      <div className="notice-title border-b-2 border-black py-2 inline-block duration-500">网站公告</div>
      <div className="notice-list">
        {
          noticeList.map((item, index) => <div key={index} className="c-overflow-text p-2 my-4 duration-200">{item.title}</div>)
        }
      </div>
    </div>
  )
}

export default NoticeCard