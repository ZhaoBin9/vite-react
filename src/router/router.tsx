import React, { ReactElement, Suspense, memo } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoadingPage from 'page/loading'
import { RouteItem } from '@/utils/route-config'

interface Props {
  routes: RouteItem[]
}

const RenderRouter = memo(({ routes }: Props): ReactElement => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch >
        {
          routes.map((route, index) => {
            return (
              <Route key={route.path || index} path={route.path} exact={route.exact}
                  render={(props) => {
                  let renderChildRoutes = route.children ?
                    <RenderRouter routes={route.children} /> : null;
                  if (route.component) {
                    return (
                      <route.component {...props}>
                        {renderChildRoutes}
                      </route.component>
                    )
                  }
                  return renderChildRoutes
                }}
              />
            )
          })
        }
        <Redirect to="/home" />
      </Switch>
    </Suspense>
  )
})

export default RenderRouter