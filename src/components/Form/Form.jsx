import { useEffect, useRef, useState } from "react";
import validatePassword from "../../helper/passwordValidator";
import validateEmail from "../../helper/emailValidator";

function Form() {
  const exampleRef = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(exampleRef);
  }, [count]);

  const [formValues, setFormValues] = useState({
    email: "ab@cd.com",
    password: "",
  });

  const handleValidatePassword = () => {
    const password = formValues.password;
    document.getElementById("password-input").focus();

    if (!validatePassword(password)) {
      console.log("password doesn't contain required parameters");
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    hadleValidateEmail();
    handleValidatePassword();
    document.getElementById("email-input").focus();
    console.log(formValues);
  };

  const hadleValidateEmail = (event) => {
    const email = formValues.email();
    document.getElementById("email-input").focus();
    if (!validateEmail(email)) {
      console.log("email doesn't contain required parameters");
    }
  };
  return (
    <div>
      New Form <br /> Count:{count}
      ExampleRef:{exampleRef.current} <br />
      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => exampleRef.current++}>update ref</button>
      <form onSubmit={handleFormSubmit}>
        <div className="email-input-wrapper" type="email">
          <input
            id="email-input"
            type="text"
            value={formValues.email}
            onChange={(event) =>
              setFormValues({ ...formValues, email: event.target.value })
            }
          />
        </div>
        <div className="password-input-wrapper" type="password">
          <input
            id="password-input"
            type="password"
            value={formValues.password}
            onChange={(event) =>
              setFormValues({
                ...formValues,
                password: event.target.value,
              })
            }
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
