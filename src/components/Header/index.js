import { useContext } from "react";
import { NameContext } from "../../contexts/nameContext";

export function Header() {
  const { name } = useContext(NameContext);

  return <h1>{name}</h1>;
}
