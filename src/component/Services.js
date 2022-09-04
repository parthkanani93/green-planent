import React, {Component} from 'react'
import {Col, Container, Row} from 'reactstrap'
import CountUp from 'react-countup'

import {Link} from 'react-router-dom'
import HomeUrl from '../assets/images/home-border.png'

export default class Services extends Component {
  constructor(props) {
    super(props)
    this.state = {
      services: [
        {
          id: 'service1',
          icon: 'mdi-google',
          title: 'Google Ads',
          description:
            'Quisque rhoncus lectus ut lectus hendrerit at convallis lorem ornare pellentesque lobortis hendrerit mattis.',
        },
        {
          id: 'service2',
          icon: 'mdi-instagram',
          title: 'Instagram Ads',
          description:
            'Vestibulum eu tortor artett tortor rhoncus porta quis on metus morbi comodo nisi vitae neque aliquam aliquam.',
        },
        {
          id: 'service3',
          icon: 'mdi-youtube',
          title: 'Youtube Ads',
          description:
            'Aliquam dictum mollis sem sed hendrerit tempus sed class aptent taciti sociosqu litora conubia himenaeos.',
        },
      ],
      counters: [
        {
          id: '1',
          extraclass: '',
          start: 25,
          end: 49,
          title: 'Employees',
          description:
            'Sourcing Sustainable & Organic/Fair trade products from farm to Warehouse! ',
        },
        {
          id: '2',
          extraclass: 'pt-3',
          start: 25,
          end: 76,
          title: 'Projects',
          description:
            'Transparent block chain process adaptation with firm chain of custody monitoring.',
        },
        {
          id: '3',
          extraclass: 'pt-3',
          start: 25,
          end: 99,
          title: 'CLIENTS',
          description:
            'Quality assurance & Quality audits from Proto to Final Inspections. ',
        },
        {
          id: '4',
          extraclass: 'pt-3',
          start: 25,
          end: 99,
          title: 'CLIENTS',
          description:
            'Supply chain all hand picked & international standards are ensured ',
        },
        {
          id: '5',
          extraclass: 'pt-3',
          start: 25,
          end: 99,
          title: 'CLIENTS',
          description: 'Certification and compliance monitoring & control.',
        },
        {
          id: '6',
          extraclass: 'pt-3',
          start: 25,
          end: 99,
          title: 'CLIENTS',
          description: 'Fast fashion collections & Developments',
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-services" id="services">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">
                    Provide Awesome Services{' '}
                  </h3>
                  <p className="text-muted f-17 mt-3">
                    Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                    elementum mauris sit amet arcu <br /> fringilla auctor In
                    eleifend maximus nisi sed vulputate.
                  </p>

                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              {/* Render Footer Link */}
              {this.state.services.map((item, key) => (
                <Col lg={4} key={key}>
                  <div className="services-box p-4 mt-4">
                    <div className="services-icon bg-soft-primary">
                      <i className={'mdi text-primary ' + item.icon}></i>
                    </div>

                    <h5 className="mt-4">{item.title}</h5>
                    <p className="text-muted mt-3">{item.description}</p>

                    <div className="mt-3">
                      <Link to="#" className="text-primary f-16">
                        Learn More <i className="mdi mdi-arrow-right ml-1"></i>
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Row className="align-items-center mt-5 pt-4" id="counter">
              <Col lg={6}>
                <div className="pr-4 mt-4">
                  <p className="text-uppercase">why choose us </p>
                  <h3>Boots Your Website Green Planet!</h3>
                  <p className="text-muted mt-3">
                    Morbi at erat et tortor tempor sodales non eu lacus Donec at
                    gravida nunc vitae volutpat libero fusce sit amet mi quis
                    ipsum tempus gravida in quis felis Aliquam fringilla tempus
                    scelerisque Phasellus viverra tincidunt suscipit. Praesent
                    non arcu vitae augue aliquam eget vitae Pellentesque sem
                    mauris porta eget ultrices eros.
                  </p>
                  <div className="mt-4 pt-1">
                    <Link to="#" className="btn btn-outline-primary">
                      Discover More
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={5} className="offset-lg-1">
                <div className="counter-box">
                  {this.state.counters.map((counteritem, key) => (
                    <div
                      className={counteritem.id !== '1' ? 'mt-4 pt-3' : 'mt-4'}
                      key={key}
                    >
                      <div className="media d-flex align-items-center">
                        <div className="count-box bg-soft-primary text-center">
                          <i className="mdi mdi-arrow-right ml-1"></i>
                        </div>
                        <div className="media-body pl-4">
                          <p className="text-muted mb-0 ">
                            {counteritem.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}
