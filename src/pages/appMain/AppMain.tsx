import React from "react";
import "./AppMain.css";

function AppMain() {
  function manageInsert() {
    return 0;
  }

  return (
    <div className="outerBox">
      <h1>Análisis de Gastos</h1>
      <div className="mainContainer">
        <div className="input">
          <h2>Insert income / expense</h2>
          <h3>Añade tus gastos para analizarlos</h3>
          <span className="inputTittle">Concepto</span>
          <input type="text" />
          <span className="inputTittle">Monto</span>
          <input type="number" />
          <span className="inputTittle">Fecha</span>
          <input type="date" />
          <span className="inputTittle">Categoria</span>
          <input type="text" />
          {/* Debe ser LISTA, no text*/}
          <button onClick={manageInsert}>Agregar gasto</button>
        </div>
        <div className="resumen">
          <h2>Resumen de Gastos</h2>
          <h3>Visualiza tus gastos recientes</h3>
        </div>
        <div className="chart">sdgsdasdsdg</div>
      </div>
    </div>
  );
}

export default AppMain;
