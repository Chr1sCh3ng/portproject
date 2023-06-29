import React, { useState } from "react";

import { Modal, ModalHeader, ModalBody } from "reactstrap";

function QRModal() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const linkedinQR = "https://i.imgur.com/Fq6DWVc.jpeg";
  const githubQR = "https://i.imgur.com/fTuRo7T.jpeg";

  return (
    <>
      <button className="bg-dark reverseshadow text-white m-3" onClick={toggle}>
        Media links
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="fs-5" toggle={toggle}>
          Checkout my QR code
        </ModalHeader>
        <ModalBody>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div>
                  <a
                    className="d-flex justify-content-center row"
                    href="https://www.linkedin.com/in/ccchrischeng/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedinQR} alt="linkedin-QR" border="0" />
                  </a>
                  <h5 className="justify-content-center row">Linkedin</h5>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  className="d-flex justify-content-center row"
                  href="https://github.com/Chr1sCh3ng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubQR} alt="githubQR" border="0" />
                </a>
                <h5 className="justify-content-center row">Github</h5>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon .active bg-dark"
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
