function MegacapsOrderReview() {
  return (
    <>
      <h1 className="d-flex justify-content-center bg-white">
        example ORDER REVIEW
      </h1>
      <div className="bg-white vh-100 container">
        <div className="row">
          <div className="row col">
            <div>
              <div className="col-5">
                Billing Address <a href="/edit">Edit</a>
              </div>
            </div>

            <div className="row">
              <div className="col-3">Customer P/O</div>
              <div className="col-2"> ##### </div>
            </div>
            <div className="row">
              <div className="col-3">Billing To:</div>
              <div className="col-3">
                {" "}
                MARZ-HATS LLC
                <div>
                  7898 Made up lane, Imaginary City, CA, 75051, United States
                </div>{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-3">Email Address:</div>
              <div className="col-2"> SomeOne@gmail.com </div>
            </div>
            <div className="row">
              <div className="col-3">Your term:</div>
              <div className="col-2"> XXXXXXXX </div>
            </div>
          </div>
          <div className="row col">
            <div className="col-5">
              Shipping Address <a href="/edit">Edit</a>
            </div>

            <div className="row">
              <div className="col-2">Shipping To:</div>
              <div className="col-3">
                {" "}
                MARZ-HATS LLC
                <div>
                  7898 Made up lane, Imaginary City, CA, 75051, United States
                </div>{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Method:</div>
              <div className="col-2"> Fedex-Ground </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-7 align-self-start d-flex justify-content-center bg-primary">
            <div>Item information </div> <a href="/edit"> Edit</a>
          </div>
          <div className="col bg-primary">Price</div>
          <div className="col bg-primary">Qty</div>
          <div className="col align-self-end bg-primary">SubTotal</div>
        </div>

        <div className="gap: 10px 20px;">
          <div className="row">
            <div className="bg-secondary col-1">new</div>
            <div className="col-7 align-self-start d-flex justify-content-center">
              <a href="/edit">Edit</a>
            </div>
            <div className="row">
              {" "}
              <img
                src="https://d1ea5oqrw6f2pr.cloudfront.net/caches/images/products/565/160.jpg"
                className="col-1"
                alt="hat"
              />
              <div className="col-6">
                <h5>#7895</h5>
                <div> Recycled CrossHatch Cotton Trucker Cap</div>
                <div>Color: Rust=Khaki</div>
              </div>
              <div className="col text-center ">6.95</div>
              <div className="col text-center">2</div>
              <div className="col text-center">{6.95 * 2}</div>
            </div>
          </div>
          <div className="row ">
            <div className="bg-secondary col-1">new</div>
            <div className="col-7 align-self-start d-flex justify-content-center">
              <a href="/edit">Edit</a>
            </div>
            <div className="row">
              {" "}
              <img
                src="https://d1ea5oqrw6f2pr.cloudfront.net/caches/images/products/565/160.jpg"
                className="col-1"
                alt="hat"
              />
              <div className="col-6">
                <h5>#7895</h5>
                <div> Recycled CrossHatch Cotton Trucker Cap</div>
                <div>Color: Rust=Khaki</div>
              </div>
              <div className="col text-center ">6.95</div>
              <div className="col text-center">2</div>
              <div className="col text-center">{6.95 * 2}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MegacapsOrderReview;
