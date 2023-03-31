import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import Button from '../buttons/Button';
import ParagraphText from '../typography/ParagraphText';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Explore the world with Technology</h1>
            <ParagraphText className="hero__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore Blog
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/vr-guy.jpg"
              alt="vy guy"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
