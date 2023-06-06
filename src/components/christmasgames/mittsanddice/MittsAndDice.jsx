import React from "react";
import VisualRep from "./VirtualRep";

const InstructionComponent = () => {
  return (
    <div>
      <div className="container  text-white py-5 ">
        <p>
          <button
            class="text-white reverseshadow  gradient-text ddbtn m-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample1"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Materials Needed
          </button>
          <button
            class="text-white reverseshadow  gradient-text ddbtn m-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            How to play
          </button>
          <button
            class=" text-white reverseshadow  gradient-text ddbtn m-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".multi-collapse"
            aria-expanded="false"
            aria-controls="multiCollapseExample1 multiCollapseExample2"
          >
            Show all
          </button>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body bg-dark reverseshadow">
                <p className="card-text text-white">
                  <h3>Materials needed</h3>
                  <ul>
                    <li>Oven mitts </li>
                    <li>A pair of dice</li>
                    <li>A gift box with multiple layers of wrapping paper</li>
                    <li>Small prizes or gifts</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div
                class="card card-body bg-dark reverseshadow
                "
              >
                <p className="card-text text-white">
                  <h3>How to play</h3>
                  <ol>
                    <li>
                      Start by preparing the gift box. Wrap it with multiple
                      layers of wrapping paper, making sure each layer is
                      securely taped.
                    </li>
                    <li>
                      Gather all the players in a circle or around a table.
                    </li>
                    <li>
                      Determine the order of play. This can be done by random
                      selection or any preferred method.
                    </li>
                    <li>
                      The first player takes the pair of dice and rolls them. If
                      they roll a pair (both dice show the same number), they
                      put on the oven mitts immediately.
                    </li>
                    <li>
                      Once the mitts are on, the player begins unwrapping the
                      gift box using only their mitt-covered hands. They can
                      tear off one layer of wrapping paper at a time. If they
                      encounter another layer beneath, they continue unwrapping.
                    </li>
                    <li>
                      Each layer may or may not contain a prize. The player
                      keeps any prizes they uncover during their turn.
                    </li>
                    <li>
                      The player continues unwrapping until there are no more
                      layers of wrapping paper on the gift box.
                    </li>
                    <li>
                      Once the current player's turn ends, they remove the mitts
                      or gloves and pass the dice to the next player in
                      clockwise order.
                    </li>
                    <li>
                      The game continues in this manner, with players taking
                      turns rolling the dice, putting on the mitts, and
                      unwrapping the layers of the gift box until there are no
                      more layers left.
                    </li>
                  </ol>
                  <p>
                    "Mitts and Dice" is a fun and suspenseful game where the
                    players take turns unwrapping layers of the gift box with
                    the oven mitts on. There is no clear winner in this game, as
                    the focus is on the enjoyment of unwrapping the gift box and
                    discovering the prizes hidden within.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card reverseshadow m-4">
          <div className="card-body shortCardx">
            <h5 className=" gradient-text ">Tips and Tricks:</h5>

            <p className="card-text text-white">
              <ul>
                <li>
                  Use a proxy for gift, like a ticket or print out a picture put
                  it in an envolope{" "}
                </li>
                <li>
                  Playing with older group? add in drinks, make a proxy with
                  something like "finish your drink", "shot with a friend."{" "}
                </li>
                <li>Get extra large dice from a lawn game set. </li>
                <li>
                  Here is a nested box example. Use my Amazon affiliate code,
                  there is not cost to you but it helps me out.
                </li>
                <li>here is a virtual representation of the game. </li>

                <VisualRep />
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionComponent;
