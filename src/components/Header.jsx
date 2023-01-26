import React from "react";
import "./Header.css";

export default function Header({ handleOnClick }) {
  return (
    <section className="headerSection">
      <div className="headerTheme">🌞</div>
      <div>
        <button name="all" onClick={handleOnClick}>
          All
        </button>
        <button name="active" onClick={handleOnClick}>
          Active
        </button>
        <button name="completed" onClick={handleOnClick}>
          Completed
        </button>
      </div>
    </section>
  );
}
