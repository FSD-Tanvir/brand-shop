import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero my-5"
        style={{
          backgroundImage: "url(https://i.ibb.co/Zc3b1HQ/phones-iphone-15.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content py-20">
          <div className="max-w-3xl px-2">
            <h1 className="mb-5 text-5xl font-bold">
              {" "}
              Elevate Your Tech Experience!
            </h1>
            <p className="mb-5">
              Unlock the World of Possibilities with Just One Click! Explore our
              cutting-edge collection of smartphones and discover the perfect
              blend of style, functionality, and innovation. Click here to
              embark on a journey of seamless connectivity and unparalleled
              technology.
            </p>
            <Link to={"/phones"}>
              <button className="btn btn-error">Go Now!</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <h1 className="text-7xl  "> Elevate Your Mobile Experience!</h1>
      <p>
        Unlock the World of Possibilities with Just One Click! Explore our
        cutting-edge collection of smartphones and discover the perfect blend of
        style, functionality, and innovation. Click here to embark on a journey
        of seamless connectivity and unparalleled technology.
      </p>
      <button className="btn btn-error">Explore</button> */}
    </div>
  );
};

export default Banner;
