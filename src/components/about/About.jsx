import "./about.css";
import who from "../../assets/whoWeAre.jpg";

const About = () => {
  return (
    <div id="about" className="about row col-md-12">
      <div className="col-8 left">
        <img className="img-fluid" src={who} alt="" />
      </div>
      <div className="right col-md-4">
        <h3 className="title"> Who We Are </h3>
      </div>
    </div>
  );
};

export default About;
