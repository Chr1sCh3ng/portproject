function Invoice() {
  return (
    <>
      <div className="bg white">
        <a href="/mcorderreview"> Order Review page</a>
      </div>
      <div className="bg-warning p-1"></div>
      <div className="bg-white">
        <div className="bg-primary text-white row ">
          <div className="col">invoice date</div>
          <div className="col">invoice # </div>
          <div className="col">invoice amount</div>
          <div className="col">Due date</div>
          <div className="col">Payment/credit</div>
          <div className="col">Balance </div>
          <div className="col">Aging </div>
        </div>
      </div>

      <div className="row text-white"></div>
      <div className=" ml-1">
        <h2 className="bg-success col"> lets try flex 1 0 </h2>
      </div>
      <div className="  ml-1">
        <h2 className="bg-success col">
          {" "}
          use Gap instead of margin remove margins
        </h2>
      </div>
      <div className="col ml-1">
        <h2 className="bg-success">
          {" "}
          Keep it simple, you can refactor the code later.
        </h2>
      </div>
      <div className="col ml-1">
        <h2 className="bg-success">
          {" "}
          https://getbootstrap.com/docs/4.0/content/tables/
        </h2>
      </div>
      <div className="col ml-1">
        <h2 className="bg-success"> test e</h2>
      </div>

      <div className="flex bg-white row ">
        <div className="col ml-1">invoice date</div>
        <div className="col ml-1">invoice # </div>
        <div className="col ml-1">invoice amount</div>
        <div className="col ml-1">Due date</div>
        <div className="col ml-1">Payment/credit</div>
        <div className="col ml-1">Balance </div>
        <div className="col ml-1">Aging </div>
      </div>
    </>
  );
}

export default Invoice;
