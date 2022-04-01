import React from "react";
import Botones from "./components/botones/Botones";
import Historial from "./components/historial/Historial";
import data from "./components/data.json";
const histo=[];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
      seleccionAnterios: "",
      historial: [],
    };
  }

  componentDidUpdate(estadoPrevio){
    if(estadoPrevio.contador !== this.state.contador){
      histo.push(this.state.seleccionAnterios)
      console.log("actualizando componente")
    }
  }


  handleClick = (e) => {
    if (this.state.contador >= 7) {
      alert("Fin.");
    } else {
      if (e === "A") {
        if (this.state.contador === 0) {
          this.setState({
            contador: this.state.contador + 1,
          });
        } else {
          if (this.state.historial[this.state.historial.length - 1] === "A") {
            this.setState({
              contador: this.state.contador + 2,
            });
          } else {
            this.setState({
              contador: this.state.contador + 1,
            });
          }
        }
      } else if (e === "B") {
        if (this.state.contador === 0) {
          this.setState({
            contador: this.state.contador + 2,
          });
        } else {
          if (this.state.historial[this.state.historial.length - 1] === "A") {
            this.setState({
              contador: this.state.contador + 3,
            });
          } else {
            this.setState({
              contador: this.state.contador + 2,
            });
          }
        }
      }
    }

    this.renderizarSeleccionAnteriores(e);
    this.registroHistorial(e);
    console.log(this.state.contador);
    console.log(this.state.historial);
  };

  renderizarSeleccionAnteriores = (a) => {
    this.setState({
      seleccionAnterior: a,
    });
  };

  registroHistorial = (ele) => {
    this.setState({
      historial: [...this.state.historial, ele],
    });
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Botones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Historial
          seleccionAnterior={this.state.seleccionAnterior}
          historial={this.state.historial.map(
            (e, index) => (
              <li key={index}>{e}</li>
            ),
          )}
        />
      </div>
    );
  }
}


export default App;
