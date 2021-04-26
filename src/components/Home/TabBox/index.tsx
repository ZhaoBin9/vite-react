import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import { fetchTestNews } from 'apis/home'
import TabsLinkList from './TabsLinkList'
import HoverScaleImg from 'comps/HoverScaleImg'
import { useHistory } from 'react-router-dom'

export interface TabListItem {
  id: number;
  fullImage: string;
  title: string;
  updateTime: string;
  summary: string;
  [propName: string]: string | number | null
}
  interface TabList {
  code: number;
  data: TabListItem[];
  pageIndex: number;
  pageSize: number;
  success: boolean;
  totalItem: number;
  totalPage: number;
}

export interface TabData {
  code: number;
  data: TabList;
  success: boolean;
}


const TabBox = (): ReactElement => {
  const history = useHistory()
  const contentListCollection = useRef<NodeListOf<Element> | null>(null)
  const [activeContentIndex, setActiveContentIndex] = useState(0)
  const [tabContentList, setTabContentList] = useState<TabListItem[]>([])

  const handleTabsChange = useCallback(async (index = 1) => {
    const res = await fetchTestNews<TabData>({ pageIndex: index })
    setTabContentList(res.data.data)
  }, [])

  const handleHoverContentItem = useCallback((index: number) => {
    if (activeContentIndex === index && contentListCollection.current) {
      return
    }

    if (!contentListCollection.current) {
      contentListCollection.current = document.querySelectorAll('.content-list>div')
    }
    contentListCollection.current![activeContentIndex].classList.remove('active-items')
    contentListCollection.current![index].classList.add('active-items')
    setActiveContentIndex(index)
  }, [activeContentIndex])

  useEffect(() => {
    tabContentList.length && handleHoverContentItem(0)
  }, [tabContentList])

  return (
    <div className="tab-box border-box p-6 bg-white rounded">
      <div className="tab-btn-list flex border-b border-gray-400">
        <TabsLinkList handleTabsChange={handleTabsChange} />
      </div>
      <div className="tab-content mt-4 c-row-between">
        <div className="content-figure c-col-between h-full">
          <HoverScaleImg src={tabContentList[0]?.fullImage || ''} text="个人博客，属于我的小世界！" height={100} />
          <HoverScaleImg  src={tabContentList[1]?.fullImage || ''} text="个人网站做好了，百度不收录怎么办？来，看看他们怎么做的" height={100} />
        </div>
        <div className="content-list">
          {
            tabContentList.map((item, index) => {
              return (
                <div key={index} onClick={() => history.push(`/article?id=${item.id}`)} onMouseOver={() => handleHoverContentItem(index)} className="border-box px-4 pt-2 mb-1 content-items">
                  <div className="title-box flex">
                    <div className="items-sort">{index+1}</div>
                    <div className="items-title">{item.title}</div>
                  </div>
                  <div className="items-summary mt-2 break-all overflow-hidden">{item.summary}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TabBox