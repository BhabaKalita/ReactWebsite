import React from "react";
import web from "../src/image/home.jpg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className = "row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {props.name}<strong className = "brand-name">Bhaba Kalita</strong>
                </h1>
                <h2 className="my-3">
                  We're the team of talented minds in a mission to change the world
                </h2>
                <div className = "mt-3">
                    <a href = "/service" className = "btn-get-started">{props.btname}</a>
                </div>
              </div>
              <div className = "col-lg-6 order-1 order-lg-2 header img">
                  <img src = {props.imgsrc} className="img-fluid animated d-flex align-item-center " alt = "about img"/>

              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;