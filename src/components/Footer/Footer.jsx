import React from 'react'
import './Footer.scss'
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import twitter from '../../assets/twitter.svg'
import fb from '../../assets/fb.svg'
import insta from '../../assets/insta.svg'


const Footer = () => {
    const navigate = useNavigate()
    return (

        <div className='footer'>
            <footer>
                <div className="footer__container">
                    <div className="footer__row">
                        <div className=" main-foot">
                            <img src={logo} alt="" className='foot-img' />
                            <div className='foot-icon'>
                                <img src={twitter} alt="" />
                                <img src={fb} alt="" />
                                <img src={insta} alt="" />

                            </div>

                        </div>

                        <div className='foot-second'>
                            <div className="footer__col">
                                <h4 style={{ fontWeight: "bold" }}>Products</h4>
                                <ul>
                                    <li onClick={() => navigate('/')}>How it works</li>
                                    <li onClick={() => navigate('/')}>Features</li>
                                    <li onClick={() => navigate('/')}>Browse Categories</li>
                                    <li onClick={() => navigate('/')}>Kapitify Pro</li>
                                </ul>
                            </div>
                            <div className="footer__col dh">
                                <h4 style={{ fontWeight: "bold" }}>Support &
                                    Resources</h4>
                                <ul>
                                    <li onClick={() => navigate('/')}>Blog</li>
                                    <li onClick={() => navigate('/')}>FAQs</li>
                                    <li onClick={() => navigate('/')}>About Us</li>
                                    <li onClick={() => navigate('/')}>Contact Us</li>

                                </ul>
                            </div>


                            <div className="footer__col">
                                <h4 style={{ fontWeight: "bold" }}>Legal</h4>
                                <ul>
                                    <li onClick={() => navigate('cookie')}>Terms & Condition</li>
                                    <li onClick={() => navigate('privacy')}>Privacy Policy</li>
                                </ul>
                            </div>

                        </div>

                        <div className='copyright'>
                            <p>© 2022 Kapitify Labs</p>
                            <p>Rights Reserved.</p>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer