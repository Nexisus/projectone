import React from 'react';
import Navbar from './pagecomp/Navbar'
import Main from './pagecomp/Main'
import Footer from './pagecomp/Footer'
import './App.css'

export default function App(){
    return(
            <div className='App'>
                <Navbar/>
                <Main/>
                <Footer/>
            </div>
    )
}