import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>
        <Link to={""} target="_blank">
          <FaFacebookF/>
        </Link>
        <Link to={"https://github.com/saurabh9695/Job-Portal-App"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/saurabh-kushwaha-063304286/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={""} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
