function Hero() {
  return (
    <div
      className="container-fluid p-5 mt-6 mb-6 mx-6 my-6"
      style={{ backgroundColor: "#387ed1", color: "white" }}
    >
      <div className="row  ">
        <div className="col-6 mt-6 mb-6 p-5  text-ceter">
          <h3 className="p-5 ">Support Portal</h3>
          <h3 className="p-5">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            className="mx-5 p-3"
            placeholder="Eg:how doi activate F&O, why is my order getting rejected"
            style={{ width: "80%" }}
          />
          <br />
          <div className="fs-5 p-5">
            <a
              href=""
              style={{
                backgroundColor: "#387ed1",
                color: "white",
                marginRight: "15px",
              }}
            >
              Track account opening{" "}
            </a>

            <a
              href=""
              style={{
                backgroundColor: "#387ed1",
                color: "white",
                marginRight: "15px",
              }}
            >
              {" "}
              Track segment activation
            </a>

            <a
              href=""
              style={{
                backgroundColor: "#387ed1",
                color: "white",
                marginRight: "15px",
              }}
            >
              Intraday margins
            </a>

            <a
              href=""
              style={{
                backgroundColor: "#387ed1",
                color: "white",
                marginRight: "15px",
              }}
            >
              Kite user manual
            </a>
          </div>
        </div>
        <div
          className="col-6 p-5"
          style={{ backgroundColor: "#387ed1", color: "white" }}
        >
          <div className=" mt-5 mb-5 p-5 ">
            <a
              href=""
              style={{
                backgroundColor: "#387ed1",
                color: "white",
                float: "right",
                marginRight: "20%",
                fontSize: "23px",
              }}
            >
              Track ticket
            </a>
            <h3 className=" mt-5">Featured</h3>
            <a
              href=""
              style={{
                backgroundColor: "#387ed1",
                color: "white",
                fontSize: "19px",
              }}
            >
              1.BSE StAR mutual fund platform downtime
            </a>
            <br />
            <a
              href=""
              style={{
                backgroundColor: "#387ed1",
                color: "white",
                fontSize: "19px",
              }}
            >
              2.Offer for sale (OFS) - May 2025
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
