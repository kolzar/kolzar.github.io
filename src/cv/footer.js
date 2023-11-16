import React from "react";

class Footer extends React.Component {
  render() {
    const linkedin = this.props.cv ? this.props.cv.header.linkedin :  "";
    return (
      <div className="headerCV container p-2 shadow-lg rounded">
        <div className="row">
          <div className="col">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div class="col-md-4 d-flex align-items-center">
                <span class="mb-3 mb-md-0 text-muted">© 2022 .um 
                  <i class="fa-brands fa-react"></i>ReactJS + 
                  <i class="fa-brands fa-font-awesome"></i>FontAwesome + 
                  <i class="fa-brands fa-node-js"></i>NodeJS =  
                  <i class="fa-solid fa-heart fa-beat"></i>
                </span>
              </div>

              <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3">
                  <a class="text-muted" href={`${linkedin}`}>
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
