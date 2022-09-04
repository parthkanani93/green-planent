import React, { Component } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row , Button} from "reactstrap";
import { Link } from "react-router-dom";

import Feature4 from '../assets/images/features/img-4.png';
import LogoDark from '../assets/images/logo-dark.png';

export default class ForgotPassword extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="account-home-btn d-none d-sm-block">
          <Link to="/" className="text-primary"><i className="mdi mdi-home h1"></i></Link>
        </div>
        <section className="bg-account-pages vh-100">
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row className="no-gutters align-items-center">
                  <Col lg={12}>
                    <div className="login-box">
                      <Row className="align-items-center no-gutters">
                        <Col lg={6}>
                          <div className="bg-light">
                            <div className="row justify-content-center">
                              <div className="col-lg-10">
                                <div
                                  className="home-img login-img text-center d-none d-lg-inline-block">
                                  <div className="animation-2"></div>
                                  <div className="animation-3"></div>
                                  <img src={Feature4} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <Row className="justify-content-center">
                            <Col lg={11}>
                              <div className="p-4">
                                <div className="text-center mt-3">
                                  <Link to="#"><img src={LogoDark} alt=""
                                    height="22" /></Link>
                                  <p className="text-muted mt-3">Reset Password</p>
                                </div>
                                <div className="p-3 custom-form">

                                  <div className="alert alert-success bg-soft-primary text-primary border-0 text-center" role="alert">
                                    Enter your email address and we'll send you an email with instructions to reset your password.
                                                        </div>
                                  <Form>
                                    <FormGroup>
                                      <Label for="email">Email </Label>
                                      <Input type="email" className="form-control" id="email" placeholder="Enter Email" />
                                    </FormGroup>
                                    <div className="mt-3">
                                      <Button className="btn btn-primary btn-block">Reset your Password</Button>
                                    </div>
                                  </Form>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
