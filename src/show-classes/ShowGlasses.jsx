import React, { Component } from "react";

export class ShowGlasses extends Component {
  state = {
    glassImg: "./img/glassesImage/v2.png",
    glassPrice: "$50",
    glassName: "GUCCI G8759H",
  };

  chooseGlassesType = (color) => {
    console.log(color);

    switch (color) {
      case "brown":
        this.setState({
          glassImg: "./img/glassesImage/v1.png",
          glassPrice: "$30",
          glassName: "GUCCI G8850U",
        });
        break;

      case "america":
        this.setState({
          glassImg: "./img/glassesImage/v2.png",
          glassPrice: "$50",
          glassName: "GUCCI G8759H",
        });
        break;

      case "darkblue":
        this.setState({
          glassImg: "./img/glassesImage/v3.png",
          glassPrice: "$30",
          glassName: "DIOR D6700HQ",
        });
        break;

      case "redline":
        this.setState({
          glassImg: "./img/glassesImage/v4.png",
          glassPrice: "$30",
          glassName: "DIOR D6005U",
        });
        break;

      case "bubbleline":
        this.setState({
          glassImg: "./img/glassesImage/v5.png",
          glassPrice: "$30",
          glassName: "PRADA P8750",
        });
        break;

      case "seacolor":
        this.setState({
          glassImg: "./img/glassesImage/v6.png",
          glassPrice: "$30",
          glassName: "PRADA P9700",
        });
        break;

      case "thrbrown":
        this.setState({
          glassImg: "./img/glassesImage/v7.png",
          glassPrice: "$30",
          glassName: "FENDI F8750",
        });
        break;

      case "redbrown":
        this.setState({
          glassImg: "./img/glassesImage/v8.png",
          glassPrice: "$30",
          glassName: "FENDI F8500",
        });
        break;

      default:
        this.setState({
          glassImg: "./img/glassesImage/v9.png",
          glassPrice: "$30",
          glassName: "FENDI F4300",
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <section className="model d-flex justify-content-center col-5">
                <div
                  className="card text-left"
                  style={{ width: 300, position: "relative" }}
                >
                  <img
                    className="card-img-top"
                    src="./img/glassesImage/model.jpg"
                    alt="hinh model"
                  />
                  <img
                    src={this.state.glassImg}
                    alt="kinh"
                    style={{
                      width: 170,
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "16%",
                    }}
                  />
                  <div className="card-body">
                    <span className="card-title badge-danger h3 px-2 rounded">
                      {this.state.glassPrice}
                    </span>
                    <p className="card-text mt-2">{this.state.glassName}</p>
                  </div>
                </div>
              </section>
              <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlassesType("brown")}
                  >
                    <img
                      src="./img/glassesImage/v1.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlassesType("america")}
                  >
                    <img
                      src="./img/glassesImage/v2.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlassesType("darkblue")}
                  >
                    <img
                      src="./img/glassesImage/v3.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlassesType("redline")}
                  >
                    <img
                      src="./img/glassesImage/v4.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlassesType("bubbleline")}
                  >
                    <img
                      src="./img/glassesImage/v5.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlassesType("seacolor")}
                  >
                    <img
                      src="./img/glassesImage/v6.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlassesType("thrbrown")}
                  >
                    <img
                      src="./img/glassesImage/v7.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlassesType("redbrown")}
                  >
                    <img
                      src="./img/glassesImage/v8.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.chooseGlassesType("bluesky")}
                  >
                    <img
                      src="./img/glassesImage/v9.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ShowGlasses;
