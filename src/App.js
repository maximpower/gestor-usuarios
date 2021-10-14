import { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault()
    console.log(formulario)
    setUsuarios([...usuarios, formulario])

    reset()
  }

  console.log(formulario, usuarios);
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            <Input
              name="name"
              label="Nombre"
              value={formulario.name}
              onChange={handleChange}
            />
            <Input
              name="lastname"
              label="Apellido"
              value={formulario.lastname}
              onChange={handleChange}
            />
            <Input
              name="email"
              label="Correo"
              value={formulario.email}
              onChange={handleChange}
            />
            <Button >Enviar</Button>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;
