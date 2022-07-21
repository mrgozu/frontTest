import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from '../components/Table';
export const Sequelize = () => {
  const [posts, setPosts] = useState();
  const url = process.env.REACT_APP_BACKEND_URL+'sequelize';
  //Se obtiene la lista de posts solo al cargar denuevo el componente
  useEffect(() => {
    const getPosts = () => {
      axios.get(url).then((response) => {
        setPosts(response.data);
      })
      .catch(()=>alert('Error al obtener datos'))
    }
    getPosts();
  }, [])
  //Se recarga la vista si cambia el valor de posts
  useEffect(() => {
    console.log(posts)
  }, [posts])
  return (
    <div>
      {
        posts?(
          <Table data={posts} setData={setPosts} url={url}/>
        ):(<h3>No hay valores que mostrar</h3>)
      }
    </div>
  )
}
