import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './Banner.module.css'
import Bannerimg from '../imgaes/banner-img.png'

const Banner = () => {
    return (
        <section className={style["banner-wrapper"]}>
            <Container fluid>
                <Row>
                    <Col lg={5} className={style["banner-content-main"]}>
                        <div className={style["banner-content"]}>
                            <div className={style["banner-title"]}>
                                <span>Welcome to Realstate</span>
                                <h1>
                                    Manage Your Property
                                </h1>
                                <p>
                                    Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc
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
                    <Col lg={7}>
                        <div className={style["banner-main-img"]}>
                            <img src={Bannerimg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner