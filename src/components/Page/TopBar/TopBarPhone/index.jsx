// TopBarPhone
import React, { Component } from 'react'
import iLogo from '../tvc.new.03.svg'
import classNames from 'classnames'

class TopBarPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
    }
  }

  render() {

    // const mobileMenu = classNames({
    //   'hide-mobile-menu': !this.state.showMobileMenu,
    //   'show-mobile-menu': this.state.showMobileMenu,
    // })
    const mobileMenu = classNames({
      'hide-mobile-menu': false,
      'show-mobile-menu': true,
    })

    const handleHamburgerClick = () => {
      console.log('click')
      let val;
      this.state.showMobileMenu
        ? val = false
        : val = true
      console.log('val', val)
      this.setState({ showMobileMenu: val })
    }
    return (
      <div>
        <div className='top-bar'>
          <div className='branding-phone'>
            <img className='tvc-logo img-responsive' src={iLogo} alt='tvc-logo' />
            <div className='brand brand-phone'>Tri-Valley Coders</div>
          </div>
          <div className='mobile-menu-div' onClick={() => handleHamburgerClick()}>
            <div className="glyphicon glyphicon-menu-hamburger hamburger" aria-hidden="true">
            </div>
          </div>
        </div>
        <div className={mobileMenu}>
          <a href='#learn' className='phone-menu-item menu-item'>Learn</a>
          <a href='#events' className='phone-menu-item menu-item'>Events</a>
          <a href='#members' className='phone-menu-item menu-item'>Members</a>
          <a href='#sponsors' className='phone-menu-item menu-item'>Sponsors</a>
        </div>
      </div>
    )
  }
}

export default TopBarPhone
