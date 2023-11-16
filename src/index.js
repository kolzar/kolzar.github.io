import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary.js";
import Menu from "./cv/menu.js";
import Header from "./cv/headers.js";
import Experiences from "./cv/experiences.js";
import Educations from "./cv/educations.js";
import Info from "./cv/info.js";
import Languages from "./cv/languages.js";
import Patents from "./cv/patents.js";
import Courses from "./cv/courses.js";
import Skills from "./cv/skills.js";
import Privacy from "./cv/privacy.js";
import Footer from "./cv/footer.js";

import axios from "axios";
import "./css/main.css";

class App extends React.Component {
  // 0.
  constructor(props) {
    super(props);
    this.state = {
      cv: null,
      language: "en",
    };
  }

  // static getDerivedStateFromProps(o) {
  //   console.log("static getDerivedStateFromProps", o)
  // }

  // shouldComponentUpdate(o) {
  //   console.log("shouldComponentUpdate", o);
  // }

  // getSnapshotBeforeUpdate(o) {
  //   console.log("getSnapshotBeforeUpdate", o);
  // }

  componentDidMount() {
    axios
      .get(`/dati/cv.json`)
      .then((res) => {
        const cvJson = res.data;
        this.setState({
          cv: cvJson[this.state.language],
        }, () => console.log("Caricamento effettuato", this.state.cv));
      })
      .catch((err) => {
        throw new Error("Il cv.json non è stato caricato!");
      });
  }

  componentDidUpdate(o) {
    console.log("componentDidUpdate", o);
  }

  componentWillUnmount(o) {
    console.log("componentWillUnmount", o);
  }

  render() {
    let body = (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="display-1">
              <i className="fa-solid fa-cog fa-spin"></i>
              <i className="fa-solid fa-cog fa-spin fa-spin-reverse"></i>Sto caricando...
            </h4>
          </div>
        </div>
      </div>
    );

    if (this.state.cv) {
      body = (
        <div className="container">
          <Menu cv={this.state.cv} />
          <div className="row">
            <div className="col">
              <Header cv={this.state.cv} />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <Experiences cv={this.state.cv} />
              <Educations cv={this.state.cv} />
            </div>
            <div className="col-4">
              <Info cv={this.state.cv} />
              <Languages cv={this.state.cv} />
              <Patents cv={this.state.cv} />
              <Courses cv={this.state.cv} />
              <Skills cv={this.state.cv} />
              <Privacy cv={this.state.cv} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Footer cv={this.state.cv} />
            </div>
          </div>
        </div>
      );
    }
    return <ErrorBoundary>{body}</ErrorBoundary>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
