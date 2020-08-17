import { ValidationError } from "yup"; //erros

interface Errors {
  // essa parte pode ser qualquer coisa que seja um string
  // name, email e etc...
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError) {
  //um objeto com erros
  const ValidationErrors: Errors = {};

  err.inner.forEach((error) => {
    ValidationErrors[error.path] = error.message;
  });

  return ValidationErrors;
}
