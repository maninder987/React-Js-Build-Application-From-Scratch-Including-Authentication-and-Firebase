import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function AccordianContent({ contentTypeToLoad }) {
  const { newCategory, iconicCategory, criticallyAcclaimed } = useSelector(
    (state) => state.movies
  );

  const EachMediaItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: content-between;
    flex-wrap: wrap;
    padding: 10px;
    background: #000;
    color: #fff;
    font-family: Avenir, sans-serif;

    div.eachMediaItemWrapper {
      margin: 10px auto;
    }

    li {
      list-style: none;
    }

    div img {
      width: 600px;
    }

    @media screen and (max-width: 720px) {
      div img {
        width: 100%;
      }
    }
  `;

  return (
    <EachMediaItem>
      {contentTypeToLoad == "new" &&
        newCategory &&
        newCategory.map((category, index) => {
          return (
            <div className="eachMediaItemWrapper" key={index}>
              <img src={`${category.img}`} alt={`${category.label}`} />
              <li>{category.label}</li>
            </div>
          );
        })}
      {contentTypeToLoad == "iconic" &&
        iconicCategory &&
        iconicCategory.map((category, index) => {
          return (
            <div className="eachMediaItemWrapper" key={index}>
              <img src={`${category.img}`} alt={`${category.label}`} />
              <li>{category.label}</li>
            </div>
          );
        })}
      {contentTypeToLoad == "criticallyAcclaimed" &&
        criticallyAcclaimed &&
        criticallyAcclaimed.map((category, index) => {
          return (
            <div className="eachMediaItemWrapper" key={index}>
              <img src={`${category.img}`} alt={`${category.label}`} />
              <li>{category.label}</li>
            </div>
          );
        })}
    </EachMediaItem>
  );
}
