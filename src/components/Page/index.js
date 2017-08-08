import React from 'react'
import './style.css'
import TopBar from './TopBar'
import Responsive from 'react-responsive'

const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />
const Tablet = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

const Page = () =>  {

    return (
      <div>
          <TopBar />
          <Desktop>
              <h1>Desktop</h1>
          </Desktop>
          <Tablet>
              <h1>Tablet</h1>
          </Tablet>
          <Mobile>
              <h1>Mobile</h1>
          </Mobile>
      </div>
    )

}

export default Page;
