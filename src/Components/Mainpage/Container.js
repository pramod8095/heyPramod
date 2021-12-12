import React from 'react'
import image from '../../images/background.png'
import './Container.css'

export default function Container() {
    return (
        <div className='container'>
            <div className='box'>
                <h1>Pramod<br/>K <span>.</span></h1>
            </div>
            <div className='box image'>
                <img src={image} />
            </div>
            <div className='box details'>
                <h3>Pramod</h3>
            </div>
           
        </div>
    )
}
