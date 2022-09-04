import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

// Import Logo
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";

import ScrollspyNav from "./Scrollspy";

class NavbarPage extends Component {
  // render() {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    let targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <Navbar
          expand="lg"
          fixed={this.props.top === true ? "top" : ""}
          className={this.props.navClass + " navbar-custom sticky sticky-dark"}
          id="navbar"
        >
          <Container>
          {/* LOGO */}
          <NavbarBrand className="navbar-brand logo text-uppercase" href="/">
              {this.props.imglight === true ? (
                <img src={logolight} alt="" height="22" />
              ) : (
                  <img src={logodark} alt="" height="22" />
                )}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
            <Collapse
              id="navbarCollapse"
              isOpen={this.state.isOpenMenu}
              className=" navbar-collapse"
            >
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="800"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav className="navbar-nav ml-auto navbar-center" id="navbar-navlist">
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink
                        className={item.navheading === "Home" ? "active" : ""}
                        href={"#" + item.idnm}
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                
              </ScrollspyNav>
              <ul className="navbar-nav navbar-center">
                  <li className="nav-item">
                    <Link to="/Login" className="nav-link">Log In</Link>
                  </li>
                  <li className="nav-item d-inline-block d-lg-none">
                    <Link to="/SignUp" className="nav-link">Sign Up</Link>
                  </li>
                </ul>
                <div className="navbar-button d-none d-lg-inline-block">
                  <Link to="/SignUp" className="btn btn-sm btn-soft-primary btn-round">Sign Up</Link>
                </div>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
// }
export default NavbarPage;