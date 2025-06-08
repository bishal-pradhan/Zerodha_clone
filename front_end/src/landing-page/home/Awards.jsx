function Awards() {
    return ( 
        <div className='container p-3 mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='me\media\image/largestBroker.svg'/>
                </div>
                <div className='col-6 p-3'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:  </p>
                    <div className='row mt-5 mb-5'>
                 <div className='col-'>
                    <ul>
                        <li>Future and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                   
                    <div className='col-'>
                    <ul>
                        <li>Stocks and IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and goverment</li>
                    </ul>
                        </div> 
                         </div> 
                         <div className='img p-5'>
                         <img src='me\media\image/pressLogos.png ' style={{width:"90%"}}/>
                            </div> 
                         
                         </div>
                    </div>
            </div>
           
        </div>
     );
}

export default Awards;