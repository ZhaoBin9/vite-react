import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RenderRouter from './router'
import configRoute from './config'
import BasicLayout from '@/layouts/BasicLayout'

const RouterPage = () => {
  return (
    <Router>
      <Route path="/" render={() => <BasicLayout><RenderRouter routes={configRoute} /></BasicLayout>} />
    </Router>
  )
}

export default RouterPage