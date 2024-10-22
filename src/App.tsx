import "./App.css";

function App() {
  function updateColor(event: React.ChangeEvent<HTMLSelectElement>) {
    const color =
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-color"
      );
    const colorDisplay = document.getElementById("colorDisplay");
    if (colorDisplay) {
      if (color) {
        colorDisplay.style.backgroundColor = color;
      }
    }
  }

  const handSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tag = (event.target as HTMLFormElement).tag.value || "Default";
    const text = (event.target as HTMLFormElement).text.value || "Mensaje";
    const color = (event.target as HTMLFormElement).color.value || "black";
    const isBold = (event.target as HTMLFormElement).bold.checked
      ? "true"
      : "false";

    const coords = "~ ~ ~";

    const result = document.getElementById("result");

    const message = `summon minecraft:armor_stand ${coords} {Tags:[${tag}], CustomName:'{"text": "${text}", "color" : "${color}", "bold" : ${isBold}}', CustomNameVisible: 1b, Marker: 1b, Invisible: 1b, NoGravity: 1b}`;

    if (result) {
      result.innerHTML = `
        <span style="color: blue;">summon minecraft:armor_stand</span>
        <span style="color: green;">${coords}</span>
        <span style="color: orange;">{</span>
        <span style="color: purple;">Tags:[</span>
        <span style="color: red;">${tag}</span>
        <span style="color: purple;">],</span>
        <span style="color: orange;"> CustomName:</span>
        <span style="color: green;">'{"text": "</span>
        <span style="color: red;">${text}</span>
        <span style="color: green;">", "color": "</span>
        <span style="color: ${color};">${color}</span>
        <span style="color: green;">", "bold": </span>
        <span style="color: blue;">${isBold}</span>
        <span style="color: orange;">}', CustomNameVisible: 1b, Marker: 1b, Invisible: 1b, NoGravity: 1b}</span>
      `;
    }
  };

  return (
    <>
      <h1>Hola</h1>
      <section>
        <form onSubmit={handSubmit}>
          <label htmlFor="tag">Tag</label>
          <input type="text" id="tag" />
          <label htmlFor="text">Escribe el texto que quieres poner</label>
          <input type="text" id="text" />
          <label htmlFor="color">Elige un color</label>
          <div>
            <select name="color" id="color" onChange={updateColor}>
              <option value="black" data-color="#000000">
                Negro
              </option>
              <option value="dark_blue" data-color="#0000AA">
                Azul Oscuro
              </option>
              <option value="dark_green" data-color="#00AA00">
                Verde Oscuro
              </option>
              <option value="dark_aqua" data-color="#00AAAA">
                Aqua Oscuro
              </option>
              <option value="dark_red" data-color="#AA0000">
                Rojo Oscuro
              </option>
              <option value="dark_purple" data-color="#AA00AA">
                Púrpura Oscuro
              </option>
              <option value="gold" data-color="#FFAA00">
                Dorado
              </option>
              <option value="gray" data-color="#AAAAAA">
                Gris
              </option>
              <option value="dark_gray" data-color="#555555">
                Gris Oscuro
              </option>
              <option value="blue" data-color="#5555FF">
                Azul
              </option>
              <option value="green" data-color="#55FF55">
                Verde
              </option>
              <option value="aqua" data-color="#55FFFF">
                Aqua
              </option>
              <option value="red" data-color="#FF5555">
                Rojo
              </option>
              <option value="light_purple" data-color="#FF55FF">
                Púrpura Claro
              </option>
              <option value="yellow" data-color="#FFFF55">
                Amarillo
              </option>
              <option value="white" data-color="#FFFFFF">
                Blanco
              </option>
            </select>

            <div id="colorDisplay" className="color-box"></div>
          </div>
          <label htmlFor="bold">Negrita</label>
          <input type="checkbox" id="bold" />
          <button>Enviar</button>
        </form>
        <div>
          <h1>Resultado</h1>
          <div className="result">
            <span id="result"></span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
