import React, { memo, useCallback, useRef, useState } from 'react'
import 'style/Carousel/index.less'

interface Props {
  list: string[]
}
type HandleSwitchCarouselItem = (index: string | number) => void
type HandleHoverEvent = (type: 'over' | 'out') => void

const Carousel: React.FC<Props> = memo(({ list }) => {
  const arrowRefs = useRef<NodeListOf<Element> | null>(null)
  const [selectItem, setSelectItem] = useState<number>(0)
  const handleSwitchCarouselItem: HandleSwitchCarouselItem = useCallback((index) => {
    if (typeof index === 'number') {
      setSelectItem(index)
    } else {
      if (index === 'prev') {
        selectItem === 0 ? setSelectItem(list.length - 1) : setSelectItem(selectItem - 1)
      } else {
        selectItem === list.length - 1 ? setSelectItem(0) : setSelectItem(selectItem + 1)
      }
    }
  }, [selectItem, list])
  const handleHoverEvent: HandleHoverEvent = useCallback((type) => {
    if (!arrowRefs.current) {
      arrowRefs.current = document.querySelectorAll('.carousel-wrapper>.arrow')
    }
    arrowRefs.current.forEach((item, index) => {
      let isOver = type === 'over'
      item.classList[isOver ? 'remove' : 'add'](index === 0 ? 'translate-x-5' : '-translate-x-5')
      item.classList[isOver ? 'remove' : 'add']('opacity-0')
    })
  }, [])
  return <div className="carousel-wrapper rounded overflow-hidden" onMouseOver={() => handleHoverEvent('over')} onMouseOut={() => handleHoverEvent('out')}>
    {
      list.map((item, index) => <img key={index} src={item} className={['absolute', 'top-0', 'left-0', 'object-cover', 'object-center', 'w-full', 'h-full', 'duration-500', 'ease-linear', 'cursor-pointer', selectItem === index ? '' : 'opacity-0'].join(' ')} />)
    }
    <section className="carousel-dotteds absolute left-0 bottom-6 w-full flex justify-center">
      {
        list.map((item, index) => <span key={index} onClick={() => handleSwitchCarouselItem(index)} className={['mx-1', 'inline-block', 'bg-gray-50', 'rounded-full', 'duration-200', 'cursor-pointer', 'hover:bg-blue-400', selectItem === index ? 'bg-blue-400' : ''].join(' ')} />)
      }
    </section>
    <div className="arrow absolute left-6 transform translate-x-5 opacity-0 duration-200" onClick={() => handleSwitchCarouselItem('prev')}>&lt;</div>
    <div className="arrow absolute right-6 transform -translate-x-5 opacity-0 duration-200" onClick={() => handleSwitchCarouselItem('next')}>&gt;</div>
  </div>
})

export default Carousel