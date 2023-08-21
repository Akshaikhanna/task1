import { useState } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";

let num = [];
function Login() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [inputValues, setInputValues] = useState({
    email: "",
    mobile: "",
  });

  function generateNumber(max) {
    let random = (Math.random() * max).toFixed();
    random = Number(random);
    if (!num.includes(random)) {
      num.push(random);
      return random;
    } else {
      if (num.length < max) {
        return generateNumber(max);
      } else {
        return false;
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const validateInputs = () => {
    const { email, mobile } = inputValues;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const mobileRegex =
      /^(?:(?:\+|0{0,2})91(\s*|[-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
    return emailRegex.test(email) && mobileRegex.test(mobile);
  };

  const handlefirst = (event) => {
    event.preventDefault();
    setFirst(event.target.value);
  };

  const Changecase = (event) => {
    event.preventDefault();
    setFirst(
      event.target.value.toUpperCase(0),
      event.target.value.toLowerCase()
    );
  };

  const handleinputlast = (e) => {
    setLast(e.target.value);
  };

  const handlegender = (e) => {
    setGender(e.target.value);
  };

  const handleaddress = (e) => {
    setAddress(e.target.value);
  };

  const handledob = (e) => {
    setDob(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log({ first, last, dob, address });
    if (validateInputs()) {
      alert(`Form submitted: ${generateNumber(100)}`);
    } else {
      alert("Form has errors, cannot submit.");
    }
  };
// --------------------------------------------------------------------------------------
  return (
    <div className="App">
      <div>
        <Form className="form">
          <h3 className="h3">Login</h3>
          <label>FirstName:</label>
          <input
            type="text"
            placeholder="FirstName"
            // style={{ textTransform: "capitalize" }}
            onChange={handlefirst}
            onMouseEnter={Changecase}
            className="first"
            value={first}
          />
          <label className="lastname">LastName:</label>
          <input
            type="text"
            placeholder="LastName"
            style={{ textTransform: "capitalize" }}
            onChange={handleinputlast}
          />
          <br />
          <br />
          <br />
          <label>Mobile:</label>
          <input
            type="number"
            name="mobile"
            className="Mobile"
            placeholder="Mobile"
            value={inputValues.mobile}
            onChange={handleChange}
          />
          <br />
          {/* {errorphone} */}
          <br />
          <br />
          <label className="gender">Gender:</label>
          <div className="radio">
            <input type="radio" value={gender} onChange={handlegender} />
            Male
            <input type="radio" value={gender} onChange={handlegender} />
            Female
          </div>
          <br />
          <br />
          <br />
          <label>Date of birth:</label>
          <input type="date" value={dob} onChange={handledob} />
          <br />
          <br />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={inputValues.email}
            placeholder="Email"
          />
          <br />
          {/* {erroremail} */}
          <br />
          <br />
          <label className="address1">Address:</label>
          <input type="text" className="address" onChange={handleaddress} />
          <br />
          <br />
          <br />
          <Button
            type="submit"
            variant="secondary"
            onClick={handlesubmit}
            className="button"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;

// <----------------------------------------------------------------------------------------------------->
