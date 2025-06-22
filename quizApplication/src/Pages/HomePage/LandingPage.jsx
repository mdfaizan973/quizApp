import React from "react";
import styled from "styled-components";
import { FaBrain, FaMedal, FaSmileBeam, FaBookOpen } from "react-icons/fa";

const PageWrapper = styled.div`
  font-family: "Inter", sans-serif;
  color: #333;
  background-color: #f9f8ff;
`;

// 1. Hero Section
const Hero = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #a678f1, #8f5ef7);
  color: white;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const HeroButton = styled.button`
  padding: 12px 28px;
  font-size: 16px;
  background-color: #ffe600;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  color: #6a0dad;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff176;
  }
`;

// 2. Features Section
const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  color: #6a0dad;
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  width: 220px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-6px);
  }

  svg {
    font-size: 32px;
    color: #a678f1;
    margin-bottom: 10px;
  }

  h3 {
    margin: 10px 0;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

// 3. Categories Section
const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Category = styled.div`
  background-color: #dcd2ff;
  padding: 20px;
  border-radius: 12px;
  font-weight: bold;
  color: #6a0dad;
`;

// 4. Leaderboard Preview
const Leaderboard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
`;

const LeaderItem = styled.div`
  background: #fff;
  padding: 16px 20px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
`;

// 5. Footer
const Footer = styled.footer`
  background-color: #a678f1;
  color: white;
  padding: 30px 20px;
  text-align: center;
`;

export default function LandingPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <Hero>
        <HeroTitle>Welcome to QuizLand 🎉</HeroTitle>
        <HeroText>
          Fun quizzes for curious minds! Boost your brain while having fun with
          interactive questions, exciting categories, and friendly competition.
        </HeroText>
        <HeroButton>Start Now</HeroButton>
      </Hero>

      {/* Features */}
      <Section>
        <SectionTitle>Why Kids Love Us 💜</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FaBrain />
            <h3>Brain Boost</h3>
            <p>Sharpen thinking with cool challenges.</p>
          </FeatureCard>
          <FeatureCard>
            <FaMedal />
            <h3>Leaderboard</h3>
            <p>Compete with friends and earn badges.</p>
          </FeatureCard>
          <FeatureCard>
            <FaSmileBeam />
            <h3>Fun UI</h3>
            <p>Colorful design kids love playing with!</p>
          </FeatureCard>
          <FeatureCard>
            <FaBookOpen />
            <h3>Learn & Play</h3>
            <p>Educational and engaging at the same time.</p>
          </FeatureCard>
        </FeaturesGrid>
      </Section>

      {/* Categories */}
      <Section>
        <SectionTitle>Quiz Categories 📚</SectionTitle>
        <CategoriesGrid>
          <Category>Math</Category>
          <Category>Science</Category>
          <Category>Animals</Category>
          <Category>Space</Category>
          <Category>History</Category>
          <Category>Cartoons</Category>
        </CategoriesGrid>
      </Section>

      {/* Leaderboard */}
      <Section>
        <SectionTitle>Top Players 🏆</SectionTitle>
        <Leaderboard>
          <LeaderItem>
            <span>1. Faizan</span>
            <span>150 pts</span>
          </LeaderItem>
          <LeaderItem>
            <span>2. Aisha</span>
            <span>130 pts</span>
          </LeaderItem>
          <LeaderItem>
            <span>3. Zaid</span>
            <span>115 pts</span>
          </LeaderItem>
        </Leaderboard>
      </Section>

      {/* Footer */}
      <Footer>© 2025 QuizLand — Made with 💜 for curious kids!</Footer>
    </PageWrapper>
  );
}
