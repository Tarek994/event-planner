import "./about.css";
import who from "../../assets/whoWeAre.jpg";

const About = () => {
  return (
    <div id="about" className="about main row col-12">
      <div className="right">
        <h3 className="title">
          {" "}
          Who We Are ?<hr />{" "}
        </h3>
        <p className="caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          porro sapiente ipsa accusamu Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellat porro sapiente ipsa accusamu
        </p>
      </div>
      <div className="left">
        <img className="" src={who} alt="" />
      </div>
    </div>
  );
};

export default About;
