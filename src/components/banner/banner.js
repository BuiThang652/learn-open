import "./banner.scss";
import Video from "../../accept/img/video.jpg";

function banner() {
  return (
    <>
      <div className="banner">
        <h1>
          Landing template for <span>startups</span>
        </h1>
        <p>
          Our landing page template works on all devices, so you only have{" "}
          <br></br> to set it up once, and get beautiful results forever.
        </p>
        <ul>
          <li>
            <a href="/#">Get Started</a>
          </li>
          <li>
            <a href="https://github.com/buithang652" className="view">
              View on Github
            </a>
          </li>
        </ul>
        <img src={Video} alt="Video" width="896px" height="504px" />
      </div>
    </>
  );
}

export default banner;
