// TopBarDesktop
import React from 'react'

const TopBarDesktop = (props) => {

  const { brandName, logo } = props.brand

  const renderMenuItems = props.menuItems.map((m) => (
    <a href={m.href} key={m.label} className='menu-item desktop-menu-item'>{m.label}</a>
  ))

  return (
    <div className='top-bar'>
      <div className='branding-desktop'>
        <img className='tvc-logo img-responsive' src={logo} alt='tvc-logo' />
        <div className='brand brand-desktop'>{brandName}</div>
      </div>
      <div className='desktop-menu-items'>
        {renderMenuItems}
      </div>
    </div>
  )
}

export default TopBarDesktop
