import React from "react";
import "./AppMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faChartBar, faCog } from "@fortawesome/free-solid-svg-icons";

function AppMain() {
  function manageInsert() {
    alert("Gasto agregado con éxito");
  }

  return (
    <div className="AppMain_outerBox">
      {/* Barra lateral */}
      <nav className="AppMain_sidebar" aria-label="Barra de navegación">
        <a href="#home" className="AppMain_sidebarLink">
          <FontAwesomeIcon icon={faHome} /> Home
        </a>
        <a href="#add" className="AppMain_sidebarLink">
          <FontAwesomeIcon icon={faPlus} /> Add
        </a>
        <a href="#stats" className="AppMain_sidebarLink">
          <FontAwesomeIcon icon={faChartBar} /> Stats
        </a>
        <a href="#settings" className="AppMain_sidebarLink">
          <FontAwesomeIcon icon={faCog} /> Settings
        </a>
      </nav>

      {/* Contenido principal */}
      <main className="AppMain_mainContent">
        <h1>Análisis de Gastos</h1>
        <section className="AppMain_mainContainer">
          <div className="AppMain_input">
            <h2>Insertar Ingreso / Gasto</h2>
            <p>Añade tus ingresos o gastos para analizarlos</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <label className="AppMain_inputLabel">
                Concepto
                <input type="text" className="AppMain_inputField" placeholder="Ej. Alquiler" required />
              </label>
              <label className="AppMain_inputLabel">
                Monto
                <input type="number" className="AppMain_inputField" placeholder="Ej. 500" required />
              </label>
              <label className="AppMain_inputLabel">
                Fecha
                <input type="date" className="AppMain_inputField" required />
              </label>
              <label className="AppMain_inputLabel">
                Categoría
                <input type="text" className="AppMain_inputField" placeholder="Ej. Vivienda" required />
              </label>
              <button type="submit" onClick={manageInsert} className="AppMain_button">
                Agregar Gasto
              </button>
            </form>
          </div>

          <div className="AppMain_summary">
            <h2>Resumen de Gastos</h2>
            <p>Visualiza tus gastos recientes aquí</p>
          </div>

          <div className="AppMain_chart">
            <h2>Gráfico de Gastos</h2>
            <p>Aquí se mostrará un gráfico con tus datos.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AppMain;
