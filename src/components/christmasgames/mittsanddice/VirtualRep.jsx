import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Visual() {
  const [modal, setModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [nestedModalOne, setNestedModalOne] = useState(false);
  const [nestedModalTwo, setNestedModalTwo] = useState(false);
  const [nestedModalThree, setNestedModalThree] = useState(false);
  const [nestedModalFour, setNestedModalFour] = useState(false);
  const [nestedModalFive, setNestedModalFive] = useState(false);
  const [nestedModalSix, setNestedModalSix] = useState(false);
  const [nestedModalSeven, setNestedModalSeven] = useState(false);
  const [nestedModalEight, setNestedModalEight] = useState(false);
  const [nestedModalNine, setNestedModalNine] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNestedOne = () => {
    setNestedModalOne(!nestedModalOne);
    setCloseAll(false);
  };
  const toggleNestedTwo = () => {
    setNestedModalTwo(!nestedModalTwo);
    setCloseAll(false);
  };
  const toggleNestedThree = () => {
    setNestedModalThree(!nestedModalThree);
    setCloseAll(false);
  };
  const toggleNestedFour = () => {
    setNestedModalFour(!nestedModalFour);
    setCloseAll(false);
  };
  const toggleNestedFive = () => {
    setNestedModalFive(!nestedModalFive);
    setCloseAll(false);
  };
  const toggleNestedSix = () => {
    setNestedModalSix(!nestedModalSix);
    setCloseAll(false);
  };
  const toggleNestedSeven = () => {
    setNestedModalSeven(!nestedModalSeven);
    setCloseAll(false);
  };
  const toggleNestedEight = () => {
    setNestedModalEight(!nestedModalEight);
    setCloseAll(false);
  };
  const toggleNestedNine = () => {
    setNestedModalNine(!nestedModalNine);
    setCloseAll(false);
  };

  const toggleAll = () => {
    setNestedModalOne(!nestedModalOne);
    setNestedModalTwo(false);
    setNestedModalThree(false);
    setNestedModalFour(false);
    setNestedModalFive(false);
    setNestedModalSix(false);
    setNestedModalSeven(false);
    setNestedModalEight(false);
    setNestedModalNine(false);
    setCloseAll(true);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          This is a virtual modal model that simulates the layers of mitts and
          dice.
          <br />
          <Button color="success" onClick={toggleNestedOne}>
            Un-Wrap
          </Button>
          <Modal
            isOpen={nestedModalOne}
            toggle={toggleNestedOne}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Nested Modal 1 title</ModalHeader>
            <ModalBody> Every layer can contain a "Gift"</ModalBody>
            <ModalFooter>
              <Button color="success" onClick={toggleNestedTwo}>
                Un-Wrap More
              </Button>
              <Button color="secondary" onClick={toggleAll}>
                Stop unwrapping
              </Button>
            </ModalFooter>
            <Modal
              isOpen={nestedModalTwo}
              toggle={toggleNestedTwo}
              onClosed={closeAll ? toggle : undefined}
            >
              <ModalHeader>Nested Modal 2 title</ModalHeader>
              <ModalBody>Each "Gift" can be something different</ModalBody>
              <ModalFooter>
                <Button color="success" onClick={toggleNestedThree}>
                  Un-Wrap More
                </Button>
                <Button color="secondary" onClick={toggleAll}>
                  Stop unwrapping
                </Button>
              </ModalFooter>
              <Modal
                isOpen={nestedModalThree}
                toggle={toggleNestedThree}
                onClosed={closeAll ? toggle : undefined}
              >
                <ModalHeader>Nested Modal 3 title</ModalHeader>
                <ModalBody>
                  If you are playing with childern, The "Gifts" can be toys,
                  giftcards or tickets to redeem prizes from you later
                </ModalBody>
                <ModalFooter>
                  <Button color="success" onClick={toggleNestedFour}>
                    Un-Wrap More
                  </Button>
                  <Button color="secondary" onClick={toggleAll}>
                    Stop unwrapping
                  </Button>
                </ModalFooter>
                <Modal
                  isOpen={nestedModalFour}
                  toggle={toggleNestedFour}
                  onClosed={closeAll ? toggle : undefined}
                >
                  <ModalHeader>Nested Modal 4 title</ModalHeader>
                  <ModalBody>
                    If you are playing with young adults who love to drink,
                    place cards in there that tell them to drink. Checkout tip &
                    tricks again for more details{" "}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={toggleNestedFive}>
                      Un-Wrap More
                    </Button>
                    <Button color="secondary" onClick={toggleAll}>
                      Stop unwrapping
                    </Button>
                  </ModalFooter>
                  <Modal
                    isOpen={nestedModalFive}
                    toggle={toggleNestedFive}
                    onClosed={closeAll ? toggle : undefined}
                  >
                    <ModalHeader>Nested Modal 5 title</ModalHeader>
                    <ModalBody>Stuff and things</ModalBody>
                    <ModalFooter>
                      <Button color="success" onClick={toggleNestedSix}>
                        Un-Wrap More
                      </Button>
                      <Button color="secondary" onClick={toggleAll}>
                        Stop unwrapping
                      </Button>
                    </ModalFooter>
                    <Modal
                      isOpen={nestedModalSix}
                      toggle={toggleNestedSix}
                      onClosed={closeAll ? toggle : undefined}
                    >
                      <ModalHeader>Nested Modal 6 title</ModalHeader>
                      <ModalBody>Stuff and things</ModalBody>
                      <ModalFooter>
                        <Button color="success" onClick={toggleNestedSeven}>
                          Un-Wrap More
                        </Button>
                        <Button color="secondary" onClick={toggleAll}>
                          Stop unwrapping
                        </Button>
                      </ModalFooter>
                      <Modal
                        isOpen={nestedModalSeven}
                        toggle={toggleNestedSeven}
                        onClosed={closeAll ? toggle : undefined}
                      >
                        <ModalHeader>Nested Modal 7 title</ModalHeader>
                        <ModalBody>Stuff and things</ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={toggleNestedEight}>
                            Un-Wrap More
                          </Button>
                          <Button color="secondary" onClick={toggleAll}>
                            Stop unwrapping
                          </Button>
                        </ModalFooter>
                        <Modal
                          isOpen={nestedModalEight}
                          toggle={toggleNestedEight}
                          onClosed={closeAll ? toggle : undefined}
                        >
                          <ModalHeader>Nested Modal 8 title</ModalHeader>
                          <ModalBody>Stuff and things</ModalBody>
                          <ModalFooter>
                            <Button color="success" onClick={toggleNestedNine}>
                              Un-Wrap More
                            </Button>
                            <Button color="secondary" onClick={toggleAll}>
                              Stop unwrapping
                            </Button>
                          </ModalFooter>
                          <Modal
                            isOpen={nestedModalNine}
                            toggle={toggleNestedNine}
                            onClosed={closeAll ? toggle : undefined}
                          >
                            <ModalHeader>Nested Modal 9 title</ModalHeader>
                            <ModalBody>Stuff and things</ModalBody>
                            <ModalFooter>
                              <Button color="secondary" onClick={toggleAll}>
                                Stop unwrapping
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </Modal>
                      </Modal>
                    </Modal>
                  </Modal>
                </Modal>
              </Modal>
            </Modal>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Visual;
