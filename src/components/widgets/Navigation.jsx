import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../../firebase";
import { setUserDetails } from "./../../redux/userSlice";

const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  background-image: linear-gradient(
    to right,
    #2c0b8e,
    #9900f1,
    #9900f1,
    #9900f1
  );
  padding: 0 30px;

  .logo {
    width: 120px;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;

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
      font-size: 15px;
      letter-spacing: 1.5px;
      padding: 2px 0px;
      position: relative;

      &:before {
        background-color: #fff;
        border-radius: 4px;
        position: absolute;
        bottom: -5px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
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
`;

const SignInOut = styled.div`
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
  background: #000;
  height: 50px;
  margin-top: 20px;
  padding: 10px;
`;

export default function Navigation() {
  const { name, email, image } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignInOut = (type = "") => {
    if (type == "in") {
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        dispatch(
          setUserDetails({
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
      });
    } else {
      dispatch(
        setUserDetails({
          name: null,
          email: null,
          image: null,
        })
      );
    }
  };

  return (
    <MainNav>
      <img src="/images/logo.svg" alt="Display logo" className="logo" />

      <NavWrapper>
        <a>
          <img src="/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavWrapper>

      {email ? (
        <SignInOut onClick={() => handleSignInOut("out")}>
          <img
            src={`${image}`}
            alt="user image"
            style={{ width: "50px", padding: "5px" }}
          />
          Sign Out
        </SignInOut>
      ) : (
        <SignInOut onClick={() => handleSignInOut("in")}>Sign In</SignInOut>
      )}
    </MainNav>
  );
}
