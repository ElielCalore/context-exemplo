import { useContext, useState } from "react";
import { NameContext } from "../../contexts/nameContext";

export function Form() {
  const { setName } = useContext(NameContext);
  const [form, setForm] = useState("");

  function handleChange(e) {
    setForm(e.target.value);
  }

  function handleButton(value) {
    setName(value);
  }

  return (
    <>
      <label htmlFor="input-name">Nome:</label>
      <input id="input-name" value={form} onChange={handleChange} />
      <button
        onClick={() => {
          handleButton(form);
        }}
      >
        Atualizar
      </button>
    </>
  );
}
