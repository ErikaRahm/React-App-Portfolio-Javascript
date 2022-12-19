import Modal from "./Modal";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      {status && (
        <Modal closeModal={() => setStatus(false)}>
          <h2>Modal Content</h2>
          <p>Lorem Ipsum</p>
        </Modal>
      )}

      <div>
        <h2>This is page content</h2>
        <button onClick={() => setStatus(true)}>Open Modal</button>
      </div>
    </div>
  );
}
