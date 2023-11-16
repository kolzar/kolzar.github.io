import React from "react";

class Menu extends React.Component {
  render() {
    let li = [];
    if (this.props.cv) {
      li = Object.keys(this.props.cv).map( (item, i)  => (
        <li key={i}>
            <a href={`#${item}`} class="nav-link text-secondary">
            <i className={`fa-solid ${this.props.cv[item].icon ? this.props.cv[item].icon : ""}`} ></i>
            </a>
        </li>
      ))
    }

    return (
      <header className="sticky-top px-3 py-2 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              {li}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;
