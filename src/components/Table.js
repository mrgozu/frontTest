import React from 'react'
import axios from 'axios';

export const Table = (props) => {
    const { data, setData,url } = props;
    const handleDelete = (id)=>{
        console.log(id)
        setData(data.filter(value=>value.id!==id))
        axios.delete(`${url}/${id}`)
    }
    return (
        <table className="table mx-2">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                {

                    data.map(value => {
                        return (
                            <tr key={value.id}>
                                <td>{value.name}</td>
                                <td>{value.description}</td>
                                <td>
                                    <button   
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={()=>handleDelete(value.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        )
                    })

                }
            </tbody>
        </table>
    )
}
