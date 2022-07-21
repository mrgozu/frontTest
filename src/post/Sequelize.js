import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from '../components/Table';
export const Sequelize = () => {
  const [posts, setPosts] = useState();
  const [newPost, setNewPost] = useState({ name: '', description: '' });
  const [filter, setFilter] = useState();
  const [filterPosts, setFilterPosts] = useState();

  const url = process.env.REACT_APP_BACKEND_URL + 'sequelize';
  //Se obtiene la lista de posts solo al cargar denuevo el componente

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.id]: e.target.value })
  }
  const handleSubmit = () => {
    axios.post(url, newPost).then(response => {
      alert(`Post de nombre -->${response.data.name}<-- fue creado con exito`)
      setPosts([...posts, response.data]);
    })
      .catch(() => alert('Error al crear'))

  }

  const handleFilter = (e) => {
    setFilter(e.target.value);
    const find = posts.filter(value => value.name === e.target.value);
    setFilterPosts(find)
  }
  useEffect(() => {
    const getPosts = () => {
      axios.get(url).then((response) => {
        setPosts(response.data);
      })
        .catch(() => alert('Error al obtener datos'))
    }
    getPosts();
  }, [])
  //Se recarga la vista si cambia el valor de posts
  useEffect(() => {
    console.log(posts)
  }, [posts])
  return (
    <div className='m-5'>
      <div className="input-group">
        <input value={filter}
          type="text"
          aria-label="filter"
          className="form-control"
          placeholder='Ingrese valor a buscar'
          id='filter'
          onChange={handleFilter}
        />
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setFilterPosts()}
        >
          Eliminar filtro
        </button>
      </div>
      {
        posts ? (
          <Table data={filterPosts || posts} setData={setPosts} url={url} />
        ) : (<h3>No hay valores que mostrar</h3>)
      }
      <div className="input-group">
        <input value={newPost.name}
          type="text"
          aria-label="name"
          className="form-control"
          placeholder='Ingrese nombre'
          id='name'
          onChange={handleInputChange}
        />
        <input value={newPost.description}
          type="text"
          aria-label="description"
          className="form-control"
          placeholder='Ingrese descripcion'
          id='description'
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleSubmit}
        >
          Crear
        </button>
      </div>
    </div>
  )
}
