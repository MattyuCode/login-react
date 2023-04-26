import "./Login.css";
import logo from "../../assets/CORPACAM.png";
import { useForm } from "react-hook-form";

const { useState } = require("react");

export function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // const handleInputChange = (event) => {
  //   setForm({
  //     ...form,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log("UserName", form.username);
    console.log("password", form.password);
  };

  const { register, errors, handleSubmit } = useForm();

  return (
    <section>
      <div className="formu">
        <img src={logo} alt="Descripción de la imagen" />
        <form onSubmit={enviarDatos}>
          <label>
            <span> Usuario:</span>

            <input
              className="form-control"
              type="text"
              value={form.username}
              name="username"
              onChange={(e) => {
                setForm({ ...form, username: e.target.value });
                console.log("Input de usuario:", e.target.value);
              }}
              // ref={register({
              //   required: true,
              //   message: "Please enter"
              // })}

              // onChange={handleInputChange}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.email?.message}
            </span>
            <i className="fas fa-user icnos"></i>
          </label>
          <br />
          <label>
            <span>Contraseña:</span>
            <input
              className="form-control"
              type="password"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
                console.log("Input de contrase:", e.target.value);
              }}
              // onChange={(e) => setPassword(e.target.value)}
            />
            {/* <i className="far fa-eye "></i> */}
            <i className="fas fa-lock icnos"></i>
            <i className="fas fa-eye-slash iconVer"></i>
          </label>
          <br />
          <button className="btn btn-primary w-100" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </section>
  );
}

/*
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // importa los estilos CSS de Bootstrap
import { Form, Button } from 'react-bootstrap'; // importa componentes de Bootstrap que quieres usar
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const { useState } = require("react");
export function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UserName", username);
    console.log("password", password);
  };

  return (
    <div classNameNameName="formu">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Usuario:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            placeholder='Escribe tu usuario'
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder='Escribe tu contraseña'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
*/
