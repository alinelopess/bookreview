import { useState } from 'react';

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange({ target }) {
    handleValue(
      target.getAttribute('name'),
      target.value,
    );
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}
