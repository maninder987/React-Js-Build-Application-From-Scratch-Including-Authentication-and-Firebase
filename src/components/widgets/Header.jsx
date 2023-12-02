import React from "react";
import styled from "styled-components";

export default function Header() {
  const Header = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding: 200px 50px;
    color: #fff;
    background-image: url("/images/header.jpeg");
    background-size: cover;

    .logo {
      width: 200px;
    }

    h3 {
      font-family: Avenir, sans-serif;
      font-size: 44px;
    }

    .logoHeader {
      height: 35px;
      width: 630px;
    }

    @media screen and (max-width: 720px) {
      .logoHeader {
        width: 100%;
        height: 45px;
      }
    }
  `;

  const SignUpOptions = styled.div`
    display: block;
    justify-content: center;
    flex-direction: row;

    .medium {
      background-color: #0063e5;
      width: 360px;
      height: 60px;
      padding: 16.5px 24px;
      font-family: Avenir, sans-serif;
      align-items: center;
      border-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      text-align: center;
      transition: all 0.2s ease 0s;
      vertical-align: middle;
      text-transform: uppercase;
      color: #f9f9f9;
      font-size: 18px;
      line-height: 18px;

      &:hover {
        background: #fff;
        color: #0063e5;
      }
    }

    .grid-item {
      display: inline-block;
      margin-top: 40px;
      max-width: 360px;
    }

    .grid-item:first-child {
      margin-right: 25px;
    }

    .h5 {
      margin-bottom: 28px;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.2;
      list-style: none;
      text-align: left;
      font-family: Avenir, sans-serif;
    }

    .small {
      text-align: left;
      font-family: Avenir, sans-serif;
      color: silver;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0.2px;
      line-height: 1.4;
    }

    .h6 {
      margin-bottom: 28px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
      font-family: Avenir, sans-serif;
    }
  `;

  return (
    <Header>
      <img src="/images/logo.svg" alt="Disney+" className="logo" />
      <h3>Get It All</h3>
      <img src="/images/original.png" alt="Disney+" className="logoHeader" />
      <SignUpOptions>
        <div className="grid-item both-ends">
          <p>
            <span className="h5">$13.99 </span>
            <span className="small">| Month</span>
          </p>
          <p>
            <span className="h6">
              Start streaming Disney+. Cancel at any time.*
            </span>
          </p>
          <a className="medium primary">
            <span>SIGN UP NOW</span>
          </a>
        </div>
        <div className="grid-item both-ends">
          <p>
            <span className="h5">$139.99 </span>
            <span className="small">| Year</span>
          </p>
          <p>
            <span className="h6">
              Get 12 months for the price of 10 months with an annual
              subscription.
            </span>
          </p>
          <a className="medium primary">
            <span>SAVE ON 12 MONTHS</span>
          </a>
        </div>
      </SignUpOptions>
    </Header>
  );
}
