import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";

function App() {
  const [formulario, handleChange] = useFormulario({ name: "", lastname: "" });

  console.log(formulario);
  return (
    <Container>
      <Card>
        <div style={{padding:20}}>
          <form>
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
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;
