import React from "react";
import QRModal from "../qrCodemodals/QRModal";

function Footer() {
  return (
    <>
      <div className="divider p-1 "></div>
      <div>
        <footer className="container  ">
          <p className="text-white">
            &copy;
            <QRModal />
            <h5>Christopher Cheng</h5>
          </p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
