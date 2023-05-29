import React, { useState } from "react";
// import { Image } from "react-bootstrap";
// import { Card, Image } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import github.png from "../githubQR.png"

function QRModal() {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

  // need to be url img QR CODE saved somewhere.
  // https://imgur.com/Fq6DWVc
  // https://imgur.com/fTuRo7T

  // const qrimg = "https://ibb.co/HP0kw0K";

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="fs-5" toggle={toggle}>
          Checkout my QR code
        </ModalHeader>
        <ModalBody>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a
                  href="https://www.linkedin.com/in/ccchrischeng/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ibb.co/vdbKybc/linkedin-QR.jpg"
                    alt="linkedin-QR"
                    border="0"
                  />
                </a>
              </div>
              <div className="carousel-item">
                <a
                  href="https://github.com/Chr1sCh3ng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ibb.co/ZgpsDLF/githubQR.png"
                    alt="githubQR"
                    border="0"
                  />
                </a>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon .active bg-dark"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
export default QRModal;

// * <div>
//           <a
//             href="https://github.com/Chr1sCh3ng"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="https://i.ibb.co/ZgpsDLF/githubQR.png"
//               alt="githubQR"
//               border="0"
//             />
//           </a>
//         </div>

//         <div>
//           <a
//             href="https://www.linkedin.com/in/ccchrischeng/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="https://i.ibb.co/vdbKybc/linkedin-QR.jpg"
//               alt="linkedin-QR"
//               border="0"
//               />
//           </a>
//               </div>
