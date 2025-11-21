const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*])[A-Za-z\d!@#%^&*]{8,}$/;

function validatePassword(string) {
  if (string.length < 8) {
    return false;
  }

  if (!regex.test(string)) {
    return false;
  }

  return true;
}

export default validatePassword;