import React, { useState } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import Logo from '../imgaes/Logo.png'
import Search from '../imgaes/search-normal.png'
import style from './Header.module.css'

const Header = () => {
  // State to toggle the class
  const [isNavActive, setIsNavActive] = useState(false);

  // Function to handle button click and toggle class
  const handleButtonClick = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <header className={style["main-header"]}>
        <Container fluid>
          <Row>
            <Col xs={4}>
              <div className={style["header-main-logo"]}>
                <a href="#">
                  <img src={Logo} alt="Logo" />
                </a>
              </div>
            </Col>
            <Col xs={8}>
              <Nav className={`${style["navigation"]} ${isNavActive ? style["active-nav"] : ""}`}>
                <div className={style["nav-list"]}>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">Agents</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Listings</a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={Search} alt="Search" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={style["header-btn-box"]}>
                  <div className={style["header-other"]}>
                    <a href="#">Other services</a>
                  </div>
                  <div className={style["common-btn"]}>
                    <a href="#">Contact us</a>
                  </div>
                </div>
              </Nav>
              <div className={style["header-fa-bar"]}>
                <button onClick={handleButtonClick}>
                  <span></span>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default Header;
