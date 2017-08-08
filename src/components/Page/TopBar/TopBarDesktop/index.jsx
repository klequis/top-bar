// TopBarDesktop
import React from 'react'
import iLogo from '../tvc.new.03.svg'

const TopBarDesktop = (props) => {
  return (
    <div className='top-bar'>
      <div className='branding-desktop'>
        <img className='tvc-logo img-responsive' src={iLogo} alt='tvc-logo' />
        <div className='brand brand-desktop'>Tri-Valley Coders</div>
      </div>
      <div className='desktop-menu-items'>
        <a href="#learn" className='desktop-menu-item menu-item'>Learn</a>
        <a href="#events" className='desktop-menu-item menu-item'>Events</a>
        <a href="#members" className='desktop-menu-item menu-item'>Members</a>
        <a href="#sponsors" className='desktop-menu-item menu-item'>Sponsors</a>
      </div>
    </div>
  )
}

export default TopBarDesktop
