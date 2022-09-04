import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'

class Footer_link extends Component {
  render() {
    return (
      // Footer Link start
      <Row>
        <Col lg={12}>
          <div className="text-center">
            <p className="text-muted mb-0">
              {new Date().getFullYear()} © Green Planet. Develop by Themesdesign
            </p>
          </div>
        </Col>
      </Row>
      //   Footer Link End
    )
  }
}

export default Footer_link
