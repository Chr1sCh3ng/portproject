import React from "react";
import Invoice from "./Megcaps-invoice-table";

function Megacap() {
  return (
    <>
      <div className="container vh-100 bg">
        <div className="row text-white">
          <h1 className=" col"> Outstanding invoices</h1>
          <h3 className=" col ">MARZ Hats corp. v</h3>
        </div>
        <div className=" row text-white">
          <div className="col ml-1">Customer ID: xxx</div>
          <div className="col ml-1">Company Name: xxx</div>
          <div className="col ml-1">Last Updated: xxx</div>
        </div>
        <div className="row text-white">
          <div className="col ml-1 ">
            <h3 className="bg-info">test 1</h3>
          </div>
          <div className="col ml-1 ">
            <h3 className="bg-info">test 2</h3>
          </div>
          <div className="col ml-1 ">
            <h3 className="bg-info">test 3</h3>
          </div>
          <div className="col ml-1">
            <h3 className="bg-info">test 4</h3>
          </div>
          <div className="col ml-1">
            <h3 className="bg-info">test 5</h3>
          </div>

          <div className="row text-white"></div>
          <div className="col ml-1">
            <h2 className="bg-success"> test a</h2>
          </div>
          <div className="col ml-1">
            <h2 className="bg-success"> test b</h2>
          </div>
          <div className="col ml-1">
            <h2 className="bg-success"> test c</h2>
          </div>
          <div className="col ml-1">
            <h2 className="bg-success"> test d</h2>
          </div>
          <div className="col ml-1">
            <h2 className="bg-success"> test e</h2>
          </div>
        </div>
        <Invoice></Invoice>
      </div>
    </>
  );
}

export default Megacap;
