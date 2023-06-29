import React from "react";
// import { Image } from "react-bootstrap";

function Home() {
  const bgZero =
    "https://c4.wallpaperflare.com/wallpaper/677/667/795/united-arab-emirates-dubai-reflection-on-midnight-4k-ultra-hd-desktop-wallpapers-for-computers-laptop-tablet-and-mobile-phones-3840%C3%972400-wallpaper-preview.jpg";
  const bgOne =
    "https://c4.wallpaperflare.com/wallpaper/798/616/951/macos-sierra-wallpaper-preview.jpg";
  const bgTwo =
    "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg";
  const bgThree =
    "https://c4.wallpaperflare.com/wallpaper/515/543/652/autumn-colors-in-nature-herbst-park-new-york-city-usa-4k-ultra-hd-wallpaper-for-desktop-laptop-tablet-mobile-phones-and-tv-3840%C3%972400-wallpaper-preview.jpg";
  const bgFour =
    "https://c0.wallpaperflare.com/preview/789/637/166/backlit-chiemsee-dawn-desktop-backgrounds.jpg";

  return (
    <>
      <div className="column horizontalplane">
        <div
          className="coll bg-success "
          style={{
            backgroundImage: `url(${bgZero})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>hello world </div>
        </div>
        <div
          className="bg-primary coll"
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
          className="bg-info coll"
          style={{
            backgroundImage: `url(${bgTwo})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>hello world </div>
        </div>
        <div
          className="bg-danger coll"
          style={{
            backgroundImage: `url(${bgThree})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>hello world </div>
        </div>
        <div
          className="bg-warning coll"
          style={{
            backgroundImage: `url(${bgFour})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>hello world </div>
        </div>
      </div>
    </>
  );
}

export default Home;
