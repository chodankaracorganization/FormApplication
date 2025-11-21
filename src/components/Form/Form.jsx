import { useState } from "react";
import validatePassword from "../../helper/passwordValidator";
import validateEmail from "../../helper/emailValidator";

function Form() {
  const [formValues, setFormValues] = useState({
    email: "ab@cd.com",
    password: "",
  });

  const handleValidatePassword = () => {
    const password = formValues.password;
    if (!validatePassword(password)) {
      console.log("password doesn't contain required parameters");
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    hadleValidateEmail();
    handleValidatePassword();
    console.log(formValues);
  };

  const hadleValidateEmail = (event) => {
    const email = formValues.email();
    if (!validateEmail(email)) {
      console.log("email doesn't contain required parameters");
    }
  };
  return (
    <div>
      New Form
      <form onSubmit={handleFormSubmit}>
        <div className="email-input-wrapper" type="email">
          <input
            type="text"
            value={formValues.email}
            onChange={(event) =>
              setFormValues({ ...formValues, email: event.target.value })
            }
          />
        </div>
        <div className="password-input-wrapper" type="password">
          <input
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
