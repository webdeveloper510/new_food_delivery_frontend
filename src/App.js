import PropTypes from 'prop-types'
import React from "react"
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import { layoutTypes } from "./constants/layout"
// Import Routes all
import { authProtectedRoutes, publicRoutes } from "./routes"

import 'react-toastify/dist/ReactToastify.css'


// Import all middleware
import Authmiddleware from "./routes/route"

// layouts Format
import VerticalLayout from "./components/VerticalLayout/"
import HorizontalLayout from "./components/HorizontalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"

// Import scss
import "./assets/scss/theme.scss"

import fakeBackend from "./helpers/AuthType/fakeBackend"


// Activating fake backend
fakeBackend()

const getLayout = (layoutType) => {
  let Layout = VerticalLayout
  switch (layoutType) {
    case layoutTypes.VERTICAL:
      Layout = VerticalLayout
      break
    case layoutTypes.HORIZONTAL:
      Layout = HorizontalLayout
      break
    default:
      break
  }
  return Layout
}

const App = () => {

  const { layoutType } = useSelector((state) => ({
    layoutType: state.Layout.layoutType,
  }))

  const Layout = getLayout(layoutType)

  return (
    <React.Fragment>

      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <NonAuthLayout>
                {route.component}
              </NonAuthLayout>
            }
            key={idx}
            exact={true}
          />
        ))}

        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <Authmiddleware>
                <Layout>{route.component}</Layout>
              </Authmiddleware>}
            key={idx}
            exact={true}
          />
        ))}
      </Routes>

    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any
}

export default App