import { useState, useEffect, useCallback } from "react";

export const useValidation = (stateSchema, validationSchema) => {
  const [state, setState] = useState(stateSchema);

  const [disable, setDisable] = useState(true);

  const validateState = useCallback(() => {
    const hasError = Object.keys(validationSchema).some((key) => {
      const isInputRequired = validationSchema[key].required;
      const stateError = state[key].hasError;
      return isInputRequired && stateError;
    });
    return hasError;
  }, [state, validationSchema]);

  useEffect(() => {
    setDisable(validateState());
  }, [validateState]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    const field = validationSchema[name];
    let error = "";

    if (field.required) {
      if (!value) {
        error = "This field is required.";
      } else {
        if (field.validator.regEx) {
          if (!field.validator.regEx.test(value)) {
            error = field.validator.error;
          }
        }
      }
    }

    setState((prevState) => ({
      ...prevState,
      [name]: { value, error },
    }));
  };

  const handleSubmit = event => {
    event.preventDefault()

    if (!validateState()) {
      
      // reset
      setState(stateSchema)
    }
  }

  return {state,disable,handleChange,handleSubmit}
};
