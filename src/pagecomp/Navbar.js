import React from 'react';
import './Navbar.css'
import logo from '../fot/logo.png'
import Button from '../comp/button/button'

export default function Navbar(){
    return(
            <div className='nav'>
                <div className='logo'> 
                <img alt='logo' width='125' height='50' src={logo}></img>
                </div>
                <div className='navlinks'>

                <Button>   
                    Główna
                </Button>
                <Button>   
                    Produkty
                </Button>
                <Button>   
                    Kontakt 
                </Button>
                    </div>
            </div>
    )
}