import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { NameContextComponent } from "./contexts/nameContext";

function App() {
  return (
    <NameContextComponent>
      <Header />
      <Form />
    </NameContextComponent>
  );
}

export default App;
