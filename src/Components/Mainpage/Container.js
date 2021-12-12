import React from 'react'
import image from '../../images/background.png'
import './Container.css'

export default function Container() {
    return (
        <div className='hero'>
        <div className='container'>
            <div className='box'>
                <h1>Pramod<br/>K <span>.</span></h1>
                <div>
                    <a href='https://www.instagram.com/impramodk/'>Instagram </a>|
                    <a href='https://www.linkedin.com/in/pramod-k-300bb5a2/'>LinkedIn</a><br />
                    <a href='https://github.com/pramod8095'>GitHub</a>|
                    <a href='https://www.facebook.com/pramod.kotresh'>Facebook</a>
                </div>

            </div>
            <div className='box image'>
                <img src={image} alt='Hi' />
            </div>
            <div className='box details'>
            <h5> Introduction</h5>
                <div className='intro'>                    
                    <h1>UI/UX Designer,</h1>
                    <h1>Web Developer</h1>
                    <p className='intro dev'>I am a web developer based on Bangalore. I love playing around with ReactJS and hopefully creating something that makes people smile. 
                        <br />I enjoy turning complex problems into simple, beautiful and intuitive designs. 
                        <br />When I'm not pushing pixels, you'll find me exploring space-time and continuum</p>
                </div>
            </div>
           
        </div>
        </div>
    )
}
