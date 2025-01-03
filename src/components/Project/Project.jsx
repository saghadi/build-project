import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './Project.module.css'
import classNames from 'classnames';
import Projectimg from '../imgaes/project-img-1.png'
import Projectimg1 from '../imgaes/project-img-2.png'
import Projectimg2 from '../imgaes/project-img-3.png'
import Starsimg from '../imgaes/Stars.png'


const Project = () => {
    return (
        <section className={classNames(style["project-wrapper"], style["our-gaping"])}>
            <Container fluid>
                <div className="project-content">
                    <div className={classNames(style["project-title"], style["title-box"])}>
                        <span>Best Project of the Years</span>
                        <h2>Our recent projects</h2>
                    </div>
                </div>
                <div className={style["project-card-box"]}>
                    <Row>
                        <Col lg={4}>
                            <div className={style["project-card"]}>
                                <div className={style["card-img-box"]}>
                                    <img src={Projectimg} alt="" />
                                </div>
                                <div className={style["card-text-box"]}>
                                    <div className={style["card-text"]}>
                                        <h4>Sobha Hearland II Villas</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
                                        </p>
                                    </div>
                                    <div className={style["card-star-box"]}>
                                        <img src={Starsimg} alt="" />
                                        <span>4.83</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={style["project-card"]}>
                                <div className={style["card-img-box"]}>
                                    <img src={Projectimg1} alt="" />
                                </div>
                                <div className={style["card-text-box"]}>
                                    <div className={style["card-text"]}>
                                        <h4>Sobha Hearland II Villas</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
                                        </p>
                                    </div>
                                    <div className={style["card-star-box"]}>
                                        <img src={Starsimg} alt="" />
                                        <span>4.83</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={style["project-card"]}>
                                <div className={style["card-img-box"]}>
                                    <img src={Projectimg2} alt="" />
                                </div>
                                <div className={style["card-text-box"]}>
                                    <div className={style["card-text"]}>
                                        <h4>Sobha Hearland II Villas</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
                                        </p>
                                    </div>
                                    <div className={style["card-star-box"]}>
                                        <img src={Starsimg} alt="" />
                                        <span>4.83</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
        </section>
    )
}

export default Project