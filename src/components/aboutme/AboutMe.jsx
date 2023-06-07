import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="container">
        <h1 className="gradient-text-right p-2"> About Chris Cheng</h1>
        <div className="row p-5">
          <div className="col">
            <img
              src="https://images.dog.ceo/breeds/clumber/n02101556_8243.jpg"
              className="imghome"
              alt="logo"
            />
          </div>
          <div className="col">
            <h3 className="text-white"> Career</h3>
            <div className="text-white">
              Assign Ref (Jan 2023 - May 2023): As a Software Engineer at Assign
              Ref, I developed React components, integrated backend API calls,
              and enhanced user customizability for an Announcement news page. I
              also implemented a form to collect reference information from
              users and conducted code talks to ensure functionality and
              quality. Utilizing AGILE/Scrum methodologies, I managed Git
              branches for collaboration and version control.
              <br />
              <br />
              Moochi Dog Salon (July 2016 - Nov 2022): During my time as a
              Manager and Stylist at Moochi Dog Salon, I demonstrated
              proficiency in animal care and health while delivering exceptional
              customer service. I effectively managed appointments, prioritized
              tasks, and achieved high levels of customer satisfaction.
              Additionally, I consistently met and exceeded sales targets by
              promoting pet care products and services.
              <br />
              <br />
              Emazinglights (Mar 2011 - Jul 2016): At Emazinglights, I worked as
              a Store Manager and Tour Booth Merchant. I coached sales
              representatives, managed customer experience and point-of-sale
              systems, and monitored market trends to establish pricing
              strategies. I also successfully operated a concert store and
              pop-up booth, selling merchandise at various events and music
              festivals across the US.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-white"> Life Style</h3>

            <div className="text-white">
              One of my main hobbies is weightlifting and strength training.
              Although I don't compete at a professional level, I find immense
              joy and satisfaction in pushing myself to become stronger and
              healthier. It's a great way for me to stay active and maintain a
              balanced lifestyle. Currently, my weightlifting goal is to squat
              405 pounds by the end of the 2023, and I'm committed to achieving
              that milestone.
            </div>
          </div>
          <div className="col ">
            <img
              src="https://images.dog.ceo/breeds/terrier-westhighland/n02098286_3462.jpg"
              // className="App-logo"
              alt="logo"
            />
          </div>
        </div>
        <div className="row p-5">
          <div className="col">
            <img
              src="https://images.dog.ceo/breeds/terrier-tibetan/n02097474_85.jpg"
              // className="App-logo"
              alt="logo"
            />
          </div>
          <div className="col">
            <h3 className="text-white"> Interests </h3>
            <div className="text-white">
              Board Games, Tabletop Games, Ceramic Pottery, Reading Manga Beyond
              weightlifting, I have a range of other interests that keep me
              engaged and entertained. I thoroughly enjoy playing board games
              and tabletop games, as they provide a fun and interactive way to
              challenge my strategic thinking and spend quality time with
              friends and family my current favorite board game is{" "}
              <a
                className="text-white"
                target="blank"
                href="https://www.amazon.com/dp/B00U26V4VQ?ref_=cm_sw_r_cp_ud_dp_DTH8NEW9E4VZ6SDQXWTS&_encoding=UTF8&tag=chrischeng-20&linkCode=ur2&linkId=24b6341098f95a2d32e9a2c0e3052093&camp=1789&creative=9325"
              >
                Settlers of Catan
              </a>
              . In addition, I have a creative side that I nurture through
              ceramic pottery. Working with clay and creating beautiful pottery
              pieces allows me to express myself artistically and explore my
              imagination. Lastly, I have a passion for reading manga. The
              captivating storytelling and unique art styles in manga have
              always fascinated me. I find joy in exploring various manga series
              and diving into captivating worlds created by talented manga
              artists. These hobbies and interests add depth to my life and
              provide balance to my professional endeavors. They allow me to
              unwind, explore my creativity, and connect with others who share
              similar passions. Thank you for taking the time to get to know me
              a little better. I'm excited to continue pursuing my goals,
              exploring my interests, and making meaningful connections along
              the way.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
