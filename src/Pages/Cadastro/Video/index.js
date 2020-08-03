/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  const categoryTitles = categories.map(({ title }) => title);

  const { handleChange, values } = useForm({
    title: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    category: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault displayButton="none">
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const pickedCategory = categories.find((category) => category.title === values.category);

        if (values.category !== ('Músicas' || 'Filmes' || 'Séries' || 'Games')) {
          alert('Escolha entre as categorias: Músicas, Filmes, Séries ou Games.');
          return;
        }

        if ((values.title && values.url && values.category) !== '') {
          videosRepository.create({
            title: values.title,
            url: values.url,
            categoriaId: pickedCategory.id,
          })
            .then(() => {
              console.log('Cadastrou com sucesso!');
              history.push('/');
            });
        } else {
          alert('Preencha todos os campos. Também lembre-se de escolher uma categoria válida!');
        }
      }}
      >

        <FormField
          label="Título do Vídeo"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {/* <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link> */}
      <Link to="/" style={{ paddingTop: '30px' }}>
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
