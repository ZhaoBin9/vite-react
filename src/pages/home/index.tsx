import React, { ReactElement } from 'react'
import { RouteComponentProps } from 'react-router'
import Carousel from 'comps/Carousel'
import HoverScaleImg from 'comps/HoverScaleImg'
import TabBox from 'comps/Home/TabBox'
import NoticeCard from 'comps/Home/NoticeCard'
import 'style/Home/index.less'

const selfDescribeList: { label: string, content: string }[] = [
  {
    label: '网名',
    content: 'Alisa Grandova'
  },
  {
    label: '职业',
    content: 'Web前端设计师'
  },
  {
    label: '现居',
    content: '杭州市'
  },
  {
    label: 'Email',
    content: '1792128648@qq.com'
  }
]

const Home = (props: RouteComponentProps): ReactElement => {
  return <div className="home">

    <section className="banner flex justify-between mb-4">
      <Carousel list={['https://prewww.shangjingu.cn/api/storage/921', 'https://prewww.shangjingu.cn/api/storage/923']} />
      <section className="banner-figure c-col-between">
        <HoverScaleImg src="https://prewww.shangjingu.cn/api/storage/923" height={125} text="为什么说10月24日是程序员的节日？" />
        <HoverScaleImg src="https://prewww.shangjingu.cn/api/storage/923" height={125} text="为什么说10月24日是程序员的节日？" />
      </section>
      <section className="self-describe bg-gray-900 rounded border-box p-4">
        <p className="text-2xl text-gray-600 mb-7">
          我的名片
        </p>
        <section className="card">
          {selfDescribeList.map((item, index) => <p key={index} className="text-sm text-gray-200 mb-2">{item.label}: {item.content}</p>)}
        </section>
      </section>
    </section>

    <section className="tab-container c-row-between">
      <TabBox />
      <NoticeCard />
    </section>
  </div>
}

export default Home