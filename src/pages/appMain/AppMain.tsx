import React from "react";
import "./AppMain.css";

function AppMain() {
  function manageInsert() {
    return 0;
  }

  return (
    <div className="AppMain_outerBox">
      <h1>Análisis de Gastos</h1>
      <div className="AppMain_mainContainer">
        <div className="AppMain_input">
          <h2>Insert income / expense</h2>
          <h3>Añade tus gastos para analizarlos</h3>
          <span className="AppMain_inputTitle">Concepto</span>
          <input type="text" />
          <span className="AppMain_inputTitle">Monto</span>
          <input type="number" />
          <span className="AppMain_inputTitle">Fecha</span>
          <input type="date" />
          <span className="AppMain_inputTitle">Categoria</span>
          <input type="text" />
          <button onClick={manageInsert}>Agregar gasto</button>
        </div>
        <div className="AppMain_resumen">
          <h2>Resumen de Gastos</h2>
          <h3>Visualiza tus gastos recientes</h3>
        </div>
        <div className="AppMain_chart">sdgsdasdsdg</div>
      </div>
    </div>
  );
}

export default AppMain;
