import React, {Component} from 'react'

// Importing Section
import Navbar from '../../component/Navbar/NavBar'

import Section from './Section'
import Services from '../../component/Services'
import Pricing from '../../component/Pricing'
import Team from '../../component/Team'
import Clients from '../../component/Clients'
import Contact from '../../component/Contact'
import Footer from '../../component/Footer/Footer'

class Layout2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        {id: 1, idnm: 'home', navheading: 'Home'},
        {id: 3, idnm: 'services', navheading: 'Services'},
        // {id: 4, idnm: 'pricing', navheading: 'Pricing'},
        {id: 5, idnm: 'team', navheading: 'Team'},
        // {id: 6, idnm: 'clients', navheading: 'Clients'},
        {id: 7, idnm: 'contact', navheading: 'Contact'},
      ],
      pos: document.documentElement.scrollTop,
      imglight: true,
      navClass: 'navbar-light',
      fixTop: true,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true)
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop
    if (scrollup > this.state.pos) {
      this.setState({navClass: 'nav-sticky', imglight: false})
    } else {
      this.setState({navClass: 'navbar-light', imglight: true})
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}
        <Navbar
          navItems={this.state.navItems}
          navClass={this.state.navClass}
          imglight={this.state.imglight}
          top={this.state.fixTop}
        />

        {/* Importing Section */}
        <Section />

        {/* Importing Service */}
        <Services />

        {/* Importing Pricing */}
        {/* <Pricing /> */}

        {/* Importing Team */}
        <Team />

        {/* Importing Clients */}
        {/* <Clients /> */}

        {/* Importing Contact Us */}
        <Contact />

        {/* Importing Footer */}
        <Footer />
      </React.Fragment>
    )
  }
}
export default Layout2
