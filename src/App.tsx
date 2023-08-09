import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  
  const [hasilMsg, setHasilMsg] = useState("");
  const [angka, setAngka] = useState("");

  async function hitung(){

    const angkaInt = parseInt(angka);
      setHasilMsg(await invoke("hitung", { angkaInt }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Masukkan bilangan berupa integer untuk menghitung Ganjil atau Genap</p>
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          hitung();
        }}
      >

        <input
          id="hasil-input"
          onChange={(e) => setAngka(e.currentTarget.value)}
          placeholder="Masukkan bilangan..."
        />
        <button type="submit">Submit</button>

      </form>

      <p>{hasilMsg}</p>
    </div>
  );
}

export default App;
