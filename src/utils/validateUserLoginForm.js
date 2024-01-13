export const validateUserLoginForm = (values) => {
  const errors = {};

  // Validate Username
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 6) {
    errors.username = "Username must be at least 6 characters";
  } else if (values.username.length > 15) {
    errors.username = "Username must not exceed 15 characters";
  }

  // Validate Password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
};

//export default validateUserLoginForm;
