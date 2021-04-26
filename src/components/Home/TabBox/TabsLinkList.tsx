import React, { ReactElement, memo, useCallback, useRef, useState, useEffect } from 'react'

const tabList: { name: string, isActive: boolean }[] = [
  {
    name: '个人作业',
    isActive: true
  },
  {
    name: '工作日记',
    isActive: false
  },
  {
    name: '心路历程',
    isActive: false
  },
  {
    name: '我的博客',
    isActive: false
  },
  {
    name: '前端技术',
    isActive: false
  }
]

const TabsLinkList = memo(({ handleTabsChange }: { handleTabsChange: (index: number) => void }): ReactElement => {
  const tabsItemCollection = useRef<NodeListOf<Element> | null>(null)
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const handleSwitchTabItem = useCallback((index: number) => {
    if (activeTabIndex === index && tabsItemCollection.current) {
      return
    }
    if (!tabsItemCollection.current) {
      tabsItemCollection.current = document.querySelectorAll('.tab-btn-list > div')
    }
    tabsItemCollection.current![activeTabIndex].classList.remove('border-black')
    tabsItemCollection.current![index].classList.add('border-black')
    setActiveTabIndex(index)
    handleTabsChange(index + 1)
  }, [activeTabIndex])

  useEffect(() => {
    handleSwitchTabItem(0)
  }, [])
  return (
    <>
      {
        tabList.map((item, index) =>
          (<div key={index} onClick={() => handleSwitchTabItem(index)} className="btns px-4 py-2 border-box border-b-2 cursor-pointer border-white">{item.name}</div>)
        )
      }
    </>
  )
})

export default TabsLinkList