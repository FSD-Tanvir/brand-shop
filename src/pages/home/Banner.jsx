import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <div className="my-12 ">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        // style={{ height: "560px"}}
      >
        <div
          data-src="https://i.ibb.co/SKfBCCB/phones-galaxy-s23.jpg"
          className="z-10 text-white px-32"
        >
          <h1 className="text-7xl  "> Elevate Your Mobile Experience!</h1>
          <p>
            Unlock the World of Possibilities with Just One Click! Explore our
            cutting-edge collection of smartphones and discover the perfect
            blend of style, functionality, and innovation. Click here to embark
            on a journey of seamless connectivity and unparalleled technology.
          </p>
          <button className="btn btn-error">Explore</button>
        </div>
        <div
          data-src="https://i.ibb.co/Zc3b1HQ/phones-iphone-15.jpg"
          className="z-10 text-white px-32"
        >
          {" "}
          <h1 className="text-7xl "> Elevate Your Mobile Experience!</h1>
          <p>
            Unlock the World of Possibilities with Just One Click! Explore our
            cutting-edge collection of smartphones and discover the perfect
            blend of style, functionality, and innovation. Click here to embark
            on a journey of seamless connectivity and unparalleled technology.
          </p>
          <button className="btn btn-error">Explore</button>
        </div>
        <div
          data-src="https://i.ibb.co/fShhcGN/phone-oneplus.jpg"
          className="z-10 text-white px-32"
        >
          {" "}
          <h1 className="text-7xl "> Elevate Your Mobile Experience!</h1>
          <p>
            Unlock the World of Possibilities with Just One Click! Explore our
            cutting-edge collection of smartphones and discover the perfect
            blend of style, functionality, and innovation. Click here to embark
            on a journey of seamless connectivity and unparalleled technology.
          </p>
          <button className="btn btn-error">Explore</button>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
