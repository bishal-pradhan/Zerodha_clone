function Hero() {
    return ( 
       <div className="container">
        <div className="row text-muted text-center p-5 mt-5 mb-5">
          <h1>Charges</h1>
          <h2>List of all charges and taxes.</h2>
       
        <div className="col-4 mt-5 p-5">
          <img src="me\media\image/pricingEquity.svg" />
          <h2 className="mt-5">Free equity delivery</h2>
          <p className="fs-5 mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
         <div className="col-4 mt-5 p-5">
          <img src="me\media\image/intradayTrades.svg"/>
          <h2 className="mt-5">Intraday and F&O trades</h2>
          <p className="fs-5 mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
         <div className="col-4 mt-5 p-5">
          <img src="me\media\image/pricingEquity.svg"/>
          <h2 className="mt-5">Free direct MF</h2>
          <p className="fs-5 mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
       </div>
        </div>
     );
}

export default Hero;