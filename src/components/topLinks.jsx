import React from "react";
import "./styles/toplinks.css";
function TopLinks() {
  return (
      <div>
    <div id="t_Links">
      <div data-aut-id="allCategories" id="allCategories">
        <span>All Categories</span>

        <span id="allCateg_arrow">
          <button
            type="button"
            role="button"
            tabindex="0"
            data-aut-id=""
            title=""
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-77aaa"
                d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
              ></path>
            </svg>
          </button>
        </span>
      </div>
      <ul id="topli">
        <li>
          <a>Mobile Phones</a>
        </li>
        <li>
          <a>Cars</a>
        </li>
        <li>
          <a>Motorcycles</a>
        </li>
        <li>
          <a>Houses</a>
        </li>
        <li>
          <a>TV-Video-Audio</a>
        </li>
        <li>
          <a>Tablets</a>
        </li>
        <li>
          <a>Land & Plots</a>
        </li>
      </ul>
    </div>

<div id="homepageImg">
    {/* <img src='https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg' alt="" id="homeimg"/> */}
</div>

    </div>
  );
}

export default TopLinks;
