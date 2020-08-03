import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const categoryInitialValues = {
    title: '',
    description: '',
    color: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(categoryInitialValues);

  const [categories, setCategories] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([...categories, values]);
    console.log(values);
    console.log(categories);

    clearForm();
  }

  useEffect(() => {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://bookisreview.herokuapp.com/categorias';
    fetch(URL)
      .then(async (responseFromServer) => {
        if (responseFromServer.ok) {
          const response = await responseFromServer.json();
          setCategories(response);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        New Category:
        {values.title}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Name"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/" style={{ paddingTop: '30px' }}>
        Back to home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
