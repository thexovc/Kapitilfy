import React from 'react'
import './Main.scss'
import email from '../../assets/email.svg'
import call from '../../assets/call.svg'
import arrow from '../../assets/arrow.svg'
import heart from '../../assets/heart.svg'
import bolt from '../../assets/bolt.svg'
import calendar from '../../assets/calendar.svg'
import maincurve from '../../assets/maincurve.svg'

const Main = () => {
    return (
        <div className='cont-main'>

            <div className="cont-head">
                <img src={maincurve} alt="" />

                <h1>Contact Us</h1>

                <h2 className='mobile'>Efficient customer service to ensure the quality of service</h2>
            </div>

            <div className="cont-head2">

                <h3 className=''>Need help?</h3>
                <p className=''>Efficient customer service to ensure the quality of our service.</p>
            </div>


            <div className="cont-card">
                <div className="card-col">
                    <div className="icon-con">
                        <img src={bolt} alt="" />
                    </div>
                    <h3>Speed</h3>
                    <p>Fast as Lightning, we’ll answer you within a day </p>
                </div>
                <div className="card-col mobile">
                    <div className="icon-con mobile">
                        <img src={heart} alt="" className='mobile' />
                    </div>
                    <h3 className='mobile'>Trust</h3>
                    <p className='mobile'> We are committed to finding you the ideal swapper </p>
                </div>
                <div className="card-col mobile">
                    <div className="icon-con">
                        <img src={calendar} alt="" className='mobile' />
                    </div>
                    <h3 className='mobile'>Availability</h3>
                    <p className='mobile'>We are available 24/7 </p>
                </div>
            </div>

            <div className="cont-send">
                <div className="send-con">
                    <img src={email} className="sicon" alt="" />
                    <div className="send-text">
                        <h3>Let’s chat by email</h3>
                        <p>For general inquiries, partnerhip enquiries or media enquiries, send an email and we will be in touch as soon as possible.</p>
                        <div className="send-arrow">
                            <img src={arrow} className="arrow" alt="arrow" />    Send an email
                        </div>
                    </div>
                </div>
                <div className="send-con">
                    <img src={call} className="sicon" alt="" />
                    <div className="send-text">
                        <h3>Customer Support</h3>
                        <p>Have questions, complaints or feature requests? Click to open a live chat and speak with one of our agents.</p>
                        <div className="send-arrow">
                            <img src={arrow} className="arrow" alt="arrow" />    Open live chat
                        </div>
                    </div>
                </div>
            </div>

            <div className="cont-card2">
                <h2>Start swapping with kapitify</h2>
                <p>Create a free account in less than 5 minutes and start swapping!</p>
                <button>Sign up for free</button>
            </div>

        </div>
    )
}

export default Main