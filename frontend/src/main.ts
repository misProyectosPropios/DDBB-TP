import "./styles.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("No se encontro el contenedor principal");
}

app.innerHTML = `
  <section class="page">
    <h1>Hola mundo</h1>
    <p>Backend: <span id="backend-status">Cargando...</span></p>
  </section>
`;

const backendStatus = document.querySelector<HTMLSpanElement>("#backend-status");

async function loadBackendStatus(): Promise<void> {
  try {
    const response = await fetch("http://localhost:8000/");
    const text = await response.text();

    if (!response.ok) {
      throw new Error(text || "Error al llamar al backend");
    }

    if (backendStatus) {
      backendStatus.textContent = text;
    }
  } catch (error) {
    if (backendStatus) {
      backendStatus.textContent = "No se pudo conectar al backend";
    }
    console.error(error);
  }
}

void loadBackendStatus();
