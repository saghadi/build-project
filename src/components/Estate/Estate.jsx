import React from 'react'
import style from './Estate.module.css'
import classNames from 'classnames';
import { Col, Container, Row } from 'react-bootstrap';
import Estateimg from '../imgaes/estate-img.png'
import { animated, useSpring } from 'react-spring'

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        to: { number: n },
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });

    return <animated.div>{number.to((value) => value.toFixed(0))}</animated.div>;
}


const Estate = () => {
    return (
        <section className={classNames(style["estate-wrapper"], style["our-gaping"])}>
            <Container fluid>
                <div className={style["estate-content-box"]}>
                    <div className={classNames(style["estate-title"], style["title-box"])}>
                        <h2>We are a global, boutique real estate brokerage</h2>
                    </div>
                    <div className={style["estate-main-box"]}>
                        <Row>
                            <Col lg={7} className={style["estate-content-main"]}>
                                <div className={style["estate-left-box"]}>
                                    <div className={style["estate-title-content"]}>
                                        <h3>The transfer of real estate</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.
                                        </p>
                                    </div>
                                    <div className={style["estate-btn-box"]}>
                                        <div className={classNames(style["common-btn"], style["book-btn"])}>
                                            <a href="#">
                                                Book Now!
                                            </a>
                                        </div>
                                        <div className={style["common-btn"]}>
                                            <a href="#">
                                                Contact us
                                            </a>
                                        </div>
                                    </div>
                                    <div className={style["numbers-box"]}>
                                        <div className={style["number-counter"]}>
                                            <div className={style["number"]}>
                                                <Number n={12} />
                                            </div>
                                            <span>Customers</span>
                                        </div>
                                        <div className={style["number-counter"]}>
                                            <div className={style["number"]}>
                                                <Number n={14} />
                                            </div>
                                            <span>Offices</span>
                                        </div>
                                        <div className={style["number-counter"]}>
                                            <div className={style["number"]}>
                                                <Number n={10} />
                                            </div>
                                            <span>Students</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className={style["estet-img-box"]}>
                                    <img src={Estateimg} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Estate