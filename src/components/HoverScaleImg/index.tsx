import React, { memo } from 'react'
import 'style/HoverScaleImg/index.less'

interface IHoverScaleImg {
  src: string;
  text: string;
  height: number;
}
const HoverScaleImg: React.FC<IHoverScaleImg> = memo(({ src, text, height }) => {
  return <section style={{ height: height + 'px' }} className="hover-scale-img group cursor-pointer rounded c-item-center relative overflow-hidden">
    <img src={src} className="object-cover object-center w-full h-full duration-300 absolute left-0 top-0"></img>
    <div className="cover h-full w-full bg-gray-800 bg-opacity-20 group-hover:bg-gray-100 group-hover:bg-opacity-20 duration-300 absolute left-0 top-0"></div>
    <p className="texts text-center text-white overflow-hidden break-all relative z-10">{text}</p>
  </section>
})

export default HoverScaleImg