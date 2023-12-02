import React from "react";
import styled from "styled-components";

export default function OnePass() {
  const OnePassWrapper = styled.div`
    background-color: #000;
    color: silver;
    font-family: Avenir, sans-serif;
    font-size: 20px;
    line-height: 40px;

    @media screen and (max-width: 750px) {
      img {
        width:100%;
      }
    }

    @media screen and (max-width: 1550px) {
      div.subWrapper  {
        display: flex;
        flex-direction:column; 
        justify-content: center;
        align-items: center;
        text-align:center;
      }

      li {
        list-style: none;
      }

      div:last-child div {
        padding-bottom:100px;
      }
    }

    @media screen and (min-width: 1550px) {
      img.onePassImage {
        width: 150%;
        padding-top: 150px;
      }

      div:last-child {
        padding-left: 150px;
      }

      img.onePass1Image {
        width: 40%;
        padding: 200px 0 50px 80px;
      }

      div:last-child div {
        padding: 0 100px;
      }
    }

    div.subWrapper {
      justify-content: center;
      display: flex;
      width: 80%; 
      margin: 0 auto;
    }

    .mediumButton {
      background-color:#0063e5;
      width:360px;
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
          color:#0063e5;
      }
  `;

  return (
    <OnePassWrapper>
      <div className="subWrapper">
        <div>
          <img
            src="/images/onePass.png"
            alt="OnePass Onsie Penguin Australia"
            className="onePassImage"
          />
        </div>
        <div>
          <img
            src="/images/onePass1.png"
            alt="OnePass Onsie Penguin Australia"
            className="onePass1Image"
          />

          <div className="text-container" aria-label="">
            <span className="medium">
              Stream the latest &amp; greatest on Disney+ and shop supercharged
              benefits with OnePass when you subscribe to the bundle.
            </span>
            <p>
              <span className="medium">Supercharged benefits include:</span>
            </p>
            <ul>
              <li>
                <p>
                  <span className="medium">
                    Free delivery on eligible items or orders*
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span className="medium">5x Flybuys points in-store*</span>
                </p>
              </li>
              <li>
                <p>
                  <span className="medium">
                    365 day change of mind returns*
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span className="medium">Express click &amp; collect.* </span>
                </p>
              </li>
            </ul>

            <a className="trial mediumButton">
              <span>GET THE 14-DAY FREE TRIAL^</span>
            </a>
          </div>
        </div>
      </div>
    </OnePassWrapper>
  );
}
