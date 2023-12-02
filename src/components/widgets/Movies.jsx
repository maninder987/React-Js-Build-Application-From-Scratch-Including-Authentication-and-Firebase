import React, { useState } from "react";
import styled from "styled-components";
import AccordionContent from "./AccordionContent";

export default function Movies() {
  const [contentTypeToLoad, setContentTypeToLoad] = useState("new");
  const AccordionTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: #000;
  height: 100px;
  align-items: center;

  a {
      display: flex;
      align-items: center;
      padding: 0 12px;

      img {
        height: 20px;
        min-width: 20px;
        width: 20px;
      }

      span {
        color: #fff;
        font-size: 25px;
        letter-spacing: 1.5px;
        padding: 2px 0px;
        position: relative;
        font-family: Avenir,sans-serif;

        &:before {
          background-color: #fff;
          border-radius: 4px;
          bottom: -5px;
          content: "";
          height: 2px;
          left: 0px;
          opacity: 0;
          position: absolute;
          right: 0px;
          transform-origin: left center;
          transform: scaleX(0);
          transition: 0.2s;
        }
      }

      &:hover {
        cursor: pointer;

        span:before {
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
  }
  `;

  const loadContentType = (type) => {
    setContentTypeToLoad(type);
  };

  return (
    <>
      <AccordionTitle>
        <a
          onClick={() => {
            loadContentType("new");
          }}
        >
          <span>NEW</span>
        </a>
        <a
          onClick={() => {
            loadContentType("iconic");
          }}
        >
          <span>ICONIC</span>
        </a>
        <a
          onClick={() => {
            loadContentType("criticallyAcclaimed");
          }}
        >
          <span>CRITICALLY ACCLAIMED</span>
        </a>
      </AccordionTitle>

      <AccordionContent contentTypeToLoad={contentTypeToLoad} />
    </>
  );
}
