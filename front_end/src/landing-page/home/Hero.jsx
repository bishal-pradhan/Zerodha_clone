import React from 'react';

function Hero() {
    return ( 
        <div className='container p-50'>
            <div className ='row text-center'>
                <div className='col'>
                    <img  src ='me\media\image/homeHero.png'style={{width:"60%"}} alt='Hero Image'className='mb-5'/>
                    <h1 className='mt-5'>Invest in everthing </h1>
                    <p>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <button className='p-2 mb-5 btn btn-primary fs-5' style={{width:"15%",margin:"0 auto"}}>Sign up for free</button>
                </div>
              
            </div>

           
        </div>
     );
}

export default Hero;