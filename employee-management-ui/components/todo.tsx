import React from 'react';
import { compose } from 'recompose';
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Navbar from "./navbar";

const employees = [
    {
        "first_name": "Henri",
        "last_name": "Rodriguez",
        "email": "Darrin_Rippin@gmail.com",
        "number": "+94771277218",
        "gender": "M",
        "id": "1",
        "photo": "https://randomuser.me/api/portraits/men/92.jpg"
    },
    {
        "first_name": "Lindsay",
        "last_name": "Herman",
        "email": "Ewald.Kunde@gmail.com",
        "number": "+94771274218",
        "gender": "F",
        "id": "2",
        "photo": "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
        "first_name": "Gerda",
        "last_name": "Trantow",
        "email": "Mauricio.Stehr@yahoo.com",
        "number": "+94771277681",
        "gender": "M",
        "id": "3",
        "photo": "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        "first_name": "Skye",
        "last_name": "Rolfson",
        "email": "Angelita_Simonis@hotmail.com",
        "number": "+94771277689",
        "gender": "F",
        "id": "4",
        "photo": "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        "first_name": "Simeon",
        "last_name": "Russel",
        "email": "Fabiola_Heidenreich@yahoo.com",
        "number": "+94771277682",
        "gender": "M",
        "id": "5",
        "photo": "https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
        "first_name": "Kenyon",
        "last_name": "Fahey",
        "email": "Lia_Purdy@hotmail.com",
        "number": "+94771277683",
        "gender": "F",
        "id": "6",
        "photo": "https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
        "first_name": "Toni",
        "last_name": "Boyle",
        "email": "Vivien92@yahoo.com",
        "number": "+94771277684",
        "gender": "M",
        "id": "7",
        "photo": "https://randomuser.me/api/portraits/men/88.jpg"
    },
    {
        "first_name": "Fredy",
        "last_name": "Fritsch",
        "email": "Christopher_Wisozk37@yahoo.com",
        "number": "+94771277685",
        "gender": "M",
        "id": "8",
        "photo": "https://randomuser.me/api/portraits/men/61.jpg"
    },
    {
        "first_name": "Elvis",
        "last_name": "Konopelski",
        "email": "Mavis27@gmail.com",
        "number": "+94771277686",
        "gender": "M",
        "id": "9",
        "photo": "https://randomuser.me/api/portraits/men/66.jpg"
    },
    {
        "first_name": "Lulu",
        "last_name": "Reinger",
        "email": "Melany_Rau70@gmail.com",
        "number": "+94771277687",
        "gender": "F",
        "id": "10",
        "photo": "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        "first_name": "Kelton",
        "last_name": "Rau",
        "email": "Patrick_Ratke@gmail.com",
        "number": "+94771277688",
        "gender": "F",
        "id": "11",
        "photo": "https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
        "first_name": "Adonis",
        "last_name": "Schuppe",
        "email": "Johann.Orn52@hotmail.com",
        "number": "+94771277618",
        "gender": "M",
        "id": "12",
        "photo": "https://randomuser.me/api/portraits/men/36.jpg"
    }
]
const Todo= (props) => {
  const {
    item,
    data,
    onChangeTodo,
    addTodo,
    deleteTodo,
  } = props;
  const router = useRouter()

  return (
    <React.Fragment>
        <Navbar/>
        <div className="container-fluid">
            <div className="row mt-3 mb-3">
                <div className="col-sm-9"></div>
                <div className="col-sm-3">
                    <button className="rounded-pill" style={{backgroundColor: '#7f29d6', color: 'white'}} onClick={() => router.push('/add')}>ADD EMPLOYEE</button>
                    <button className="ms-1">add employee</button>
                </div>
            </div>
            <div className="row">
                {employees.map((employee) => (
                    <div className="card flex-sm-column mt-1 ml-1" style={{width: '18rem'}}>
                        <img className="card-img-top" src={employee.photo} alt="Card image cap" />
                        <div className="card-body">
                            <p className="mb-1">{employee.first_name} {employee.last_name}</p>
                            <p className="mb-1">{employee.email}</p>
                            <p>{employee.number}</p>
                            <div className="row">
                                <div className="col-sm-5">
                                    <p>{employee.gender == 'F' ? 'Female' : 'Male'}</p>
                                </div>
                                <div className="col-sm-7">
                                    <button className="rounded-circle ml-1 bg-danger border-0" style={{color: 'white'}}>
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                    <button className="rounded-circle ml-1 bg-success ms-1 border-0" style={{color: 'white'}} onClick={() => router.push('/edit')}>
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="container-fluid">
            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr>
                        <td><img className="card-img-top" src={employee.photo} alt="Card image cap" style={{width: '5rem', height: '5rem'}}/></td>
                        <td>{employee.first_name}</td>
                        <td>{employee.last_name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.number}</td>
                        <td>{employee.gender === 'F' ? 'Female' : 'Male'}</td>
                        <td>
                            <FontAwesomeIcon icon={faEdit} onClick={() => router.push('/edit')}/>
                            <FontAwesomeIcon icon={faTrash} className="ms-1"/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      <h1>TODO</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo({
          value: item.value,
        });
      }}>
        <input
          type="text"
          value={item.value}
          onChange={e => onChangeTodo({
            value: e.target.value,
          })}
        />
        <br />
        <input
          type="submit"
          value="SUBMIT"
          style={{
            display: 'none',
          }}
        />
      </form>
      <hr />
      {data.map((item, index) => (
        <p key={index}>
          {item.value}
          {' '}
          <button onClick={() => deleteTodo(item)}>
            DELETE
          </button>
        </p>
      ))}
    </React.Fragment>
  );
};

export default compose()(Todo);
