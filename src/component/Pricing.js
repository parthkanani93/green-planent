import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import Img1 from '../assets/images/features/img-1.png';
import HomeUrl from '../assets/images/home-border.png';

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        {
          id: 1,
          title: "Starter",
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          icon: 'mdi-account',
          titlePrimary: false,
          regularprice: '$9.99',
          saleprice: '$8.99',
          pricingTag: false,
          child: [
            { btitle: 'Unlimited', title: "Target Audience", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: '1', title: "User Account", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: '100+', title: "Video Tuts", icon: "mdi-close-circle text-danger" },
            { btitle: 'Public', title: "Displays", icon: "mdi-close-circle text-danger" },
          ],
        },
        {
          id: 2,
          title: "Personal",
          titlePrimary: true,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          icon: 'mdi-account-multiple text-primary',
          regularprice: '$19.99',
          saleprice: '$18.99',
          pricingTag: true,
          child: [
            { btitle: 'Unlimited', title: "Target Audience", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: '1', title: "User Account", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: '100+', title: "Video Tuts", icon: "mdi-close-circle text-success" },
            { btitle: 'Public', title: "Displays", icon: "mdi-close-circle text-danger" },
          ],
        },
        {
          id: 3,
          title: "Ultimate",
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          titlePrimary: false,
          icon: 'mdi-account-multiple-plus',
          regularprice: '$29.99',
          saleprice: '$28.99',
          pricingTag: false,
          child: [
            { btitle: 'Unlimited', title: "Target Audience", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: '1', title: "User Account", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: '100+', title: "Video Tuts", icon: "mdi-close-circle text-success" },
            { btitle: 'Public', title: "Displays", icon: "mdi-close-circle text-success" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light bg-features">
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <img src={Img1} className="img-fluid" alt="" />
                </div>
              </Col>
              <Col lg={6} className="offset-lg-1">
                <div className="mt-4">
                  <h2>Team Collaboration in real time</h2>
                  <p className="mt-4 text-muted">Praesent ut tincidunt massa vel facilisis dui Integer mattis quis
                  augue in rhoncus Integer mattis enim vel eros bibendum egestas id laoreet nisi
                  Praesent malesuada eros at bibendum eleifend Nam nec urna hendrerit interdum risus
                  Donec faucibus quis magna sit amet laoreet Maecenas finibus semper massa in finibus est
                            venenatis quis.</p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">Explore More</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section" id="pricing">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Best Pricing Package </h3>
                  <p className="text-muted f-17 mt-3">Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                  elementum mauris
                            sit amet arcu <br /> fringilla auctor In eleifend maximus nisi sed vulputate.</p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              {/* Render Pricing items */}
              {this.state.pricing.map((item, key) => (
                <Col lg="4" key={key}>
                  <div className="pricing-box mt-4">
                    {item.pricingTag && (
                      <div className="pricing-badge"><span className="badge">Featured</span> </div>
                    )}

                    <i className={"h1 mdi " + item.icon}></i>
                    {(item.titlePrimary === true) ?
                      <h4 className="f-20 text-primary">{item.title}</h4>
                      :
                      <h4 className="f-20">{item.title}</h4>
                    }

                    <div className="mt-4 pt-2">
                      <p className="mb-2 f-18">Features</p>
                      {item.child.map((linkItem, linkkey) => (
                        <p className="mb-2" key={linkkey}><i
                          className={"mdi " + linkItem.icon + " f-18 mr-2"}></i><b>{linkItem.btitle}</b> {linkItem.title}</p>
                      ))}
                    </div>
                    <p className="mt-4 pt-2 text-muted">{item.description}
                    </p>
                    <div className="pricing-plan mt-4 pt-2">
                      <h4 className="text-muted"><s> {item.regularprice}</s> <span className="plan pl-3 text-dark">{item.saleprice}</span></h4>
                      <p className="text-muted mb-0">Per Month</p>
                    </div>
                    <div className="mt-4 pt-3">
                      <Link to="#" className="btn btn-primary btn-rounded">Purchase Now</Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
