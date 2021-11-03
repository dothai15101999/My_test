import React from 'react';
import './index.css'

const Footer = () => {
  return (

    <footer className="footer">
        <div className="container">
            <div className="container-1">
                <div className="col">
                    <h4>what happened</h4>
                    <ul className="item">
                        <li><a href="#">row 1</a></li>
                        <li><a href="#">row 1</a></li>
                        <li><a href="#">row 1</a></li>
                        <li><a href="#">row 1</a></li>
                    </ul>
                </div>
                <div className="container-2">
                    <div className="col">
                        <h4>about us</h4>
                        <ul className="item">
                            <li><a href="#">row 1</a></li>
                            <li><a href="#">row 1</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>my order</h4>
                        <ul className="item">
                            <li><a href="#">row 1</a></li>
                            <li><a href="#">row 1</a></li>
                            <li><a href="#">row 1</a></li>
                            <li><a href="#">row 1</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>my acconut</h4>
                        <ul className="item">
                            <li><a href="#">row 1</a></li>
                            <li><a href="#">row 1</a></li>
                            <li><a href="#">row 1</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>help</h4>
                        <ul className="item">
                            <li><a href="#">row 1</a></li>
                            <li><a href="#">row 1</a></li>
                            <li><a href="#">row 1</a></li>
                            <li><a href="#">row 1</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="container-1">
            <div className="col">
                <i className="far fa-copyright"></i>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda eius fugit neque, sapiente veniam voluptate! Iusto laboriosam officiis quo ut! Amet aut debitis est omnis quia rem vitae. Ratione.
            </div>
            <div className="col">
                <div className="icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;