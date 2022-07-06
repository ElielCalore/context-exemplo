import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { NameContextComponent } from "./contexts/nameContext";
import { FormUpload } from "./components/FormUpload";

function App() {
  return (
    <NameContextComponent>
      {/* <Header />
      <Form /> */}
      <FormUpload />
    </NameContextComponent>
  );
}

export default App;
