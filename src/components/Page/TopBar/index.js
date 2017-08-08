// TopBar

import React from 'react'
import './style.css'
import Responsive from 'react-responsive'
import TopBarDesktop from './TopBarDesktop'
import TopBarPhone from './TopBarPhone'
// Desktop, tablet and mobile setup
const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />
const Tablet = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />
const Phone = ({ children }) => <Responsive maxWidth={768} children={children} />

// Default (desktop, tablet) and mobile setup
// const Default = ({ children }) => <Responsive minWidth={768} children={children} />;
// const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />;

const TopBar = () => {

  return (
    <div>
      <Desktop>
        <TopBarDesktop />
      </Desktop>
      <Tablet>
        <TopBarDesktop />
      </Tablet>
      <Phone>
        <TopBarPhone />
      </Phone>
    </div>
  )

}

export default TopBar;
