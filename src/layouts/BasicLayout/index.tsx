import React, { ComponentProps, ReactElement, memo } from 'react'
import Header from 'comps/Header'
import Footer from 'comps/Footer'

const BasicLayout = memo((props: ComponentProps<any>): ReactElement => {
  return (
    <section className="bg-gray-100 relative" style={{ zIndex: 1 }}>
      <Header></Header>
      <section style={{ width: '1200px' }} className="m-auto mt-4">
        {props.children}
      </section>
      <Footer></Footer>
    </section>
  )
})

export default BasicLayout