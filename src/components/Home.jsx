import React from "react";
// import { Image } from "react-bootstrap";

function Home() {
  const bgOne = "https://images.dog.ceo/breeds/brabancon/n02112706_1561.jpg";
  const bgTwo = "https://images.dog.ceo/breeds/mastiff-english/1.jpg";

  return (
    <>
      <div className="row">
        <div
          className="col bg-success horizontalplane"
          style={{
            backgroundImage:
              "url(" +
              "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>hello world </div>
        </div>
        <div
          className="bg-primary col"
          style={{
            backgroundImage: `url(${bgOne})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>hello world </div>
        </div>
        <div
          className="bg-info col"
          style={{
            backgroundImage: `url(${bgTwo})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>hello world </div>
        </div>
        <div className="bg-danger col">
          <div>hello world </div>
        </div>
        <div className="bg-warning col">
          <div>hello world </div>
        </div>
      </div>
    </>
  );
}

export default Home;
