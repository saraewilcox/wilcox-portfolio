import React from "react";
import "./GithubProfileCard.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";

export default function GithubProfileCard({prof}) {

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            <SocialMedia />
          </div>
          <div className="hobbies">
            <h1>Hobbies</h1>
            <p className="hobbies-text">Hiking, reading, traveling, home renovations, fostering dogs and puppies as part of the Rocky Mountain Puppy Rescue. And not ashamed to admit I've seen every episode of Golden Girls.</p>
          </div>
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
