function Team() {
    return ( 
        <>
      <div className="container">
        <div className="row mt-3  ">
            <h1 className="text-center fs-2">People</h1>
        </div>
        <div className="row p-5   ">
            <div className="col-6 p-4 text-center"> 
                <img src="me\media\image/nithinKamath.jpg" style={{borderRadius:"100%" ,width:"50%"}}/>
                <h2 className="fs-4 mt-3">Nithin Kamath</h2>
                <h3 className="fs-5">Founder,CEO</h3>
                </div>
            <div className="col-6 p-5 my-5 ">
             <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p> 

    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

    <p>Playing basketball is his zen.</p>

    <p>Connect on Homepage / TradingQnA / Twitter</p>
              </div>
            

        </div>

     </div>
        </>
     );
}

export default Team;