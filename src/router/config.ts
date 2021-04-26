import { RouteItem } from 'utils/route-config'
import Home from 'page/home'
import { lazy } from 'react'
const About = lazy(() => import('page/about'))
const Daily = lazy(() => import('page/daily'))
const Music = lazy(() => import('page/music'))
const Note = lazy(() => import('page/note'))
const Article = lazy(() => import('page/article'))

const configRoute: RouteItem[] = [
  {
    name: 'home',
    path: '/home',
    exact: true,
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    exact: true,
    component: About
  },
  {
    name: 'music',
    path: '/music',
    exact: true,
    component: Music
  },
  {
    name: 'note',
    path: '/note',
    exact: true,
    component: Note
  },
  {
    name: 'daily',
    path: '/daily',
    exact: true,
    component: Daily
  },
  {
    name: 'article',
    path: '/article',
    exact: true,
    component: Article
  }
]

export default configRoute