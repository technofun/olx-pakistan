import React from "react";
import Logo from "../images/logo.png";
import Search from "../images/search.svg";
import SearchBtn from "../images/searchBtn.svg";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import "./styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navContainer">
        <div id="logo_box">
          <img src={Logo} alt="olx pakistan logo" className="logo" />
        </div>
        <div id="searches">
          <div id="first_location_box">
            <div id="locationInput">
              <img src={Search} alt="search" id="searchIcon" />
              <input
                type="text"
                name=""
                id="locInputField"
                className="form-contr"
                placeholder="Search city, area or locality"
                onClick={() => {
                  let mdiv = document.getElementById("locationInput");
                  mdiv.style.borderColor = "rgb(45, 250, 250)";
                }}
                onBlur={() => {
                  let mdiv = document.getElementById("locationInput");
                  mdiv.style.borderColor = "black";
                }}
              />
              <span class="loc_down_arrow">
                <button>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    class=""
                    fill-rule="evenodd"
                  >
                    <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
          <div>
          <div id="srchBtn">
            {/*
  <input type="search" id="searchField" placeholder="Find Cars, Mobile Phones and more..."/>
<button > <img src={Search} alt="search" id="searchIcon" /></button>
</div> */}
            <InputGroup className="mb-3">
              <FormControl
                id="searchField"
                placeholder="Find Cars, Mobile Phones and more..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button
                  style={{
                    backgroundColor: "#002f34",
                    outline: "none",
                    border: "none",
                  }}
                >
                  <img src={SearchBtn} alt="search" id="searchIcon" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
          </div>
        </div>
        <div id="nav-buttons">
        <div id="login-box">
          <a href="" id="login">
            Login
          </a>
        </div>
        <div id="nav_sellbtn">
          <a href="">
            <div className="sellBtn" id="sellBtn">
              <span>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  class=""
                  fill-rule="evenodd"
                >
                  <path
                    class="rui-367TP"
                    d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"
                  ></path>
                </svg>
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: ".5px",
                  color: "#002f34",
                  marginLeft: "3px",
                  backgroundColor:"#ffffff;"
                }}
              >
                SELL
              </span>
            </div>
          </a>
        </div>

</div>

      </div>
    </nav>
  );
}

export default Navbar;
