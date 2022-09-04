import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Input} from "reactstrap";
import FooterLink from "../Footer/Footer_link";

import LogoDark from '../../assets/images/logo-dark.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          id: 1,
          title: "Services",
          child: [
            { title: "Web Design", link: "#" },
            { title: "Lorem Test", link: "#" },
            { title: "Credit", link: "#" },
            { title: "Ui Design", link: "#" },
          ],
        },
        {
          id: 2,
          title: "Company",
          child: [
            { title: "Features", link: "#" },
            { title: "Faq", link: "#" },
            { title: "Contact us", link: "#" }
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Footer Start */}
        <footer
          className="section bg-light bg-footer pb-5"
        >
          <Container>
            <Row>
              <Col lg={4}>
                <div className="footer-info mt-4">
                  <img src={LogoDark} alt="" height="22" />
                  <p className="text-muted mt-4 mb-2">Aenean lacus enim Praesent congue praesent viverra interdum
                            maximus lobortis.</p>
                  <div className="team-social mt-4 pt-2">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <Link to="#" className="text-reset"><i className="mdi mdi-facebook"></i></Link>
                      </li>{" "}
                      <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-twitter"></i></Link>
                      </li>{" "}
                      <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-google"></i></Link>
                      </li>{" "}
                      <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-pinterest"></i></Link>
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <Row className="pl-0 md-lg-5">
                  {/* Render Footer Link */}
                  {this.state.links.map((item, key) => (
                    <Col lg={6} key={key}>
                      <div className="mt-4">
                        <h5 className="f-20">{item.title}</h5>
                        <ul className="list-unstyled footer-link mt-3">
                          {item.child.map((linkItem, key) => (
                            <li key={key}>
                              <Link to={linkItem.link}>
                                {linkItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col lg={4}>
                <div className="mt-4">
                  <h5 className="f-20">Subscribe</h5>
                  <div className="subscribe mt-4 pt-1">
                    <Form action="#">
                      <Input placeholder="Enter Email" type="text" style={{height: 'auto'}}/>
                      <Button color="primary" className="btn btn-primary"><i className="mdi mdi-send"></i></Button>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
            <hr className="my-5" />
            {/* Render Footer Link End */}
            <FooterLink />
          </Container>
        </footer>
        {/* Footer End */}
      </React.Fragment>
    );
  }
}

export default Footer;
