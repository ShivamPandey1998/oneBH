import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>Welcome to Our E-Commerce Store</HeroTitle>
        <HeroSubtitle>Discover the Best Deals on Electronics and More</HeroSubtitle>
        <ShopNowButton href="#">Shop Now</ShopNowButton>
      </HeroContent>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  background-image: url('https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); /* Replace with your hero image URL */
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 0;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const ShopNowButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #ff5757;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e54141;
  }
`;

export default Hero;
