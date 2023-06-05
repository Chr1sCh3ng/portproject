import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function VisualRep() {
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
      <button
        className="ddbtn gradient-text-right reverseshadow m-2"
        onClick={toggle}
      >
        Visual mitts and dice
      </button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="bg-patone" toggle={toggle}>
          Modal title
        </ModalHeader>
        <ModalBody>
          <div>
            This is a virtual modal model that simulates the layers of mitts and
            dice.
            <br />
          </div>
          <Button color="success" onClick={toggleNestedOne}>
            Un-Wrap
          </Button>

          <Modal
            isOpen={nestedModalOne}
            toggle={toggleNestedOne}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader className="bg-pattwo">
              Nested Modal 1 title
            </ModalHeader>
            <ModalBody> Every layer can contain a "Gift"</ModalBody>
            <ModalFooter className="bg-pattwo">
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
              <ModalHeader className="bg-patthree">
                Nested Modal 2 title
              </ModalHeader>
              <ModalBody>Each "Gift" can be something different</ModalBody>
              <ModalFooter className="bg-patthree">
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
                <ModalHeader className="bg-patone">
                  Nested Modal 3 title
                </ModalHeader>
                <ModalBody>
                  If you are playing with childern, The "Gifts" can be toys,
                  giftcards or tickets to redeem prizes from you later
                </ModalBody>
                <ModalFooter className="bg-patone">
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
                  <ModalHeader className="bg-pattwo">
                    Nested Modal 4 title
                  </ModalHeader>
                  <ModalBody>
                    If you are playing with young adults who love to drink,
                    place cards in there that tell them to drink.
                  </ModalBody>
                  <ModalFooter className="bg-pattwo">
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
                    <ModalHeader className="bg-patthree">
                      Nested Modal 5 title
                    </ModalHeader>
                    <ModalBody>
                      {" "}
                      I like to give the cards/gifts titles and descriptions,
                      like "Bottoms up" -finish your drink
                      <br></br>
                      "Two's company" - Pick a friend to take shots with.
                      <br />
                      And the classic...
                      <br />
                      "Iced" - Chug smirnoff ice on one knee.
                      <br />
                      note: all drinking must be finished before continue
                      unwrapping.
                    </ModalBody>
                    <ModalFooter className="bg-patthree">
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
                      <ModalHeader className="bg-patone">
                        Nested Modal 6 title
                      </ModalHeader>
                      <ModalBody>
                        8888888888888888888 insert link Want this for your next
                        Christmas party? Check out this starter
                      </ModalBody>
                      <ModalFooter className="bg-patone">
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
                        <ModalHeader className="bg-pattwo">
                          Nested Modal 7 title
                        </ModalHeader>
                        <ModalBody>
                          Plan ahead!
                          <br />
                          Buying wrapping paper in Januery will be the cheapest.
                          <br />
                          Don't want to spend money on paper? Use newspaper
                          <br />
                          Break down and save your Amazon boxes.
                        </ModalBody>
                        <ModalFooter className="bg-pattwo">
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
                          <ModalHeader className="bg-patthree">
                            Nested Modal 8 title
                          </ModalHeader>
                          <ModalBody>
                            {" "}
                            The game typically last about 15 minutes.
                            <br />
                            Here are ways to increase difficulty
                            <br />
                            Packing tape, wrap the whole thing with packing
                            tape.
                            <br />
                            Shrink wrap or plastic wrap. I love to use more
                            extravgent wrapping paper under shrink wrap.
                            <br />
                            Plastic tote with locks, tape the key and similar
                            keys all over the box. (make sure you pick up the
                            keys after wards for next year)
                            <br />
                            Playing with Childern? have someone dress up as the
                            "Grinch" and when it becomes the "Grinch" turn they
                            will tape up the boxes back up.
                          </ModalBody>
                          <ModalFooter className="bg-patthree">
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
                            <ModalHeader className="bg-patone">
                              Nested Modal 9 title
                            </ModalHeader>
                            <ModalBody>
                              This is the last box, and the last box your guest
                              will open is the one you start to wrap first.
                              insert link, please use my amazon affiliate link
                              when you purchase your christmas supplies for the
                              game. Or save it and use it everytime you make an
                              amazon purchase to help me out. Thank you!
                            </ModalBody>
                            <ModalFooter className="bg-patone">
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
        <ModalFooter className="bg-patone">
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default VisualRep;
