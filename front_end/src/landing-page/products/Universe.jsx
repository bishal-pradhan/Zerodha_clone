function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5">
        <h1>The Zerodha Universe</h1>
        <p className="p-4 fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 mt-5 mb-5 ">
          <img
            src="me\media\image/zerodhaFundhouse.png"
            style={{ width: "70%" }}
          />
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5 ">
          <img
            src="me\media\image/sensibullLogo.svg"
            style={{ width: "70%" }}
          />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 mt-5 ">
          <img src="me\media\image/dittoLogo.png" style={{ width: "50%" }} />
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 mt-5  ">
          <img src="me\media\image/streakLogo.png" style={{ width: "60%" }} />
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding
          </p>
        </div>
        <div className="col-4 mt-5 ">
          <img
            src="me\media\image/smallcaseLogo.png"
            style={{ width: "60%" }}
          />
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5 ">
          <img src="me\media\image/goldenpiLogo.png" style={{ width: "60%" }} />
          <p>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
         
        </div>
         <button
            className="p-2 mb-5 btn btn-primary fs-5 mt-5 "
            style={{ width: "15%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
      </div>
    </div>
  );
}

export default Universe;
