import React, { useCallback, useRef, memo } from 'react'
import { Link } from 'react-router-dom'
import 'style/Header/index.less'
import useRouterChange from '@/hooks/useRouterChange'

const routerLinkList: { path: string, name: string }[] = [
  { path: '/home', name: '首页' },
  { path: '/daily', name: '个人博客日记' },
  { path: '/note', name: '网页设计心得' },
  { path: '/about', name: '关于我' }
]
let prevLinkActiveSign = 0

const Header: React.FC<{}> = memo(() => {
  const routerLinkCollection = useRef<NodeListOf<Element> | null>(null) // 路由元素集合
  const handleRouterChange = useCallback((pathname) => { // 处理路由变化，样式处理
    if (routerLinkCollection.current === null) {
      routerLinkCollection.current = document.querySelectorAll('.link-list>section')
    }
    if (location.pathname === '/article') {
      routerLinkCollection.current![prevLinkActiveSign].classList.remove('text-blue-400')
      return
    }
    routerLinkList.forEach((item, index) => {
      if (item.path === pathname) {
        routerLinkCollection.current![prevLinkActiveSign].classList.remove('text-blue-400')
        prevLinkActiveSign = index
        routerLinkCollection.current![prevLinkActiveSign].classList.add('text-blue-400')
      }
    })
  }, [prevLinkActiveSign])

  useRouterChange(handleRouterChange) // 自定义hook，监听路由变化

  return (
    <section className="header box-border bg-gray-900">
      <section className="nav pb-1 m-auto flex z-50 sticky top-0">
        <div className="author-name mr-12">
          <Link to="/home">赵彬个人博客</Link>
        </div>
        <div className="link-list flex flex-1 text-white">
          {
            routerLinkList.map(item => (
              <section key={item.path} className="px-6 hover:text-blue-400 cursor-pointer">
                <Link to={item.path}>{item.name}</Link>
              </section>
            ))
          }
        </div>
      </section>
    </section>
  )
})

export default Header