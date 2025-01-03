import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './steps.module.css'
import classNames from 'classnames';
import Messages from '../imgaes/messages.png'
import Select from '../imgaes/edit-2.png'
import Registered from '../imgaes/sms-tracking.png'



const Steps = () => {
    return (
        <section className={classNames(style["steps-wrapper"], style["our-gaping"])}>
            <Container fluid>
                <div className={style["steps-content"]}>
                    <div className={classNames(style["steps-title"], style["title-box"])}>
                        <span>Three steps. Three minutes.</span>
                        <h2>Everything should be this easy.</h2>
                    </div>
                    <div className={style["steps-main-box"]}>
                        <div className={style["steps-card-box"]}>
                            <div className={style["steps-card-img"]}>
                                <img src={Messages} alt="" />
                            </div>
                            <div className={style["steps-card-title"]}>
                                <h3>Answer questions</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.
                                </p>
                            </div>
                        </div>
                        <div className={style["steps-card-box"]}>
                            <div className={style["steps-card-img"]}>
                                <img src={Registered} alt="" />
                            </div>
                            <div className={style["steps-card-title"]}>
                                <h3>Select a quote</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.
                                </p>
                            </div>
                        </div>
                        <div className={style["steps-card-box"]}>
                            <div className={style["steps-card-img"]}>
                                <img src={Select} alt="" />
                            </div>
                            <div className={style["steps-card-title"]}>
                                <h3>Get registered</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Steps