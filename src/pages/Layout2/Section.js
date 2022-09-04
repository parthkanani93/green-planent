import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'

// Modal Video
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss'

//import images
import HomeUrl from '../../assets/images/home-border.png'
import Typewriter from 'typewriter-effect'

class Section extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-home home-bg-2" id="home">
          <div className="bg-overlay"></div>
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={9}>
                    <div className="home-content text-center">
                      <p className="mb-0 text-white">Digital Marketing</p>
                      <img src={HomeUrl} height="15" alt="" />
                      <h1 className="mt-4 pt-3 home-title text-white">
                        Make your Site Amazing & Unique with{' '}
                        <span
                          className="element text-primary"
                          data-elements="Thamza"
                        >
                          <Typewriter
                            options={{
                              strings: ['Green Planet'],
                              autoStart: true,
                              loop: true,
                            }}
                          />
                        </span>
                      </h1>

                      <p className="text-white-50 mt-4 f-20">
                        Vestibulum egestas magna ut aliquet sodales nunc
                        fermentum <br /> ligula quis tidunt vitae massa.
                      </p>
                      <div className="mt-4 pt-2">
                        <Link to="#" className="btn btn-primary mr-3">
                          Contact Us
                        </Link>
                        <Link
                          to="#"
                          className="video-play-icon text-white"
                          onClick={this.openModal}
                        >
                          <i className="mdi mdi-play-circle-outline text-white mr-2"></i>
                          Watch Intro Video
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <ModalVideo
                channel="vimeo"
                isOpen={this.state.isOpen}
                videoId="99025203"
                onClose={() => this.setState({isOpen: false})}
              />
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Section
