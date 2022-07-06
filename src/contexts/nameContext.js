import { createContext, useState } from "react";

const NameContext = createContext("");

function NameContextComponent(props) {
  const [name, setName] = useState("");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {props.children}
    </NameContext.Provider>
  );
}

export { NameContext, NameContextComponent };
