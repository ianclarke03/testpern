import React, { Fragment, useEffect, useState } from "react";

import EditUsername from "./EditUsername";

const ListUsernames = () => {

    const [users, setUsers] = useState([]);

    //delete user function
    const deleteUser = async (id) => {
        try {
            const deleteUser = await fetch(`http://localhost:4000/users/${id}`, {
                method: "DELETE"
            });
            
            setUsers(users.filter(user => user.user_id !== id))
        } catch (err) {
            console.error(err.message);
        }
    }

    const getUsers = async () => {
        try {
            
            const response = await fetch("http://localhost:4000/users");
            const jsonData = await response.json();

            setUsers(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);


    console.log(users);

    return (
    <Fragment>
        {" "}
          <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {/*                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> */}
                {users.map( users => (

                    <tr key={users.user_id}>
                        <td>{users.description}</td>
                        <td>
                            <EditUsername users={users} />
                            {/* //maybe user={user} */}
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteUser(users.user_id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    </Fragment>
)};

export default ListUsernames;