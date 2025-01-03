import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './Footer.module.css'
import Bannerimg from '../imgaes/Footer-img.png'
import classNames from 'classnames';

const Foooter = () => {
    return (
        <section className={classNames(style["banner-wrapper"], style["our-gaping"])}>
            <Container fluid>
                <Row>
                    <Col lg={7} className={style["banner-content-main"]}>
                        <div className={style["banner-content"]}>
                            <div className={style["banner-title"]}>
                                <h1>
                                    Subscribe Our Newsletter
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
                                </p>
                            </div>
                            <div className={style["bannet-input-box"]}>
                                <form action="">
                                    <input type="text" placeholder='Enter your email' />
                                    <button>
                                        Get a Quote
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className={style["banner-main-img"]}>
                            <img src={Bannerimg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Foooter