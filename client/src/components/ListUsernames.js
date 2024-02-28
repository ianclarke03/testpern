import React, { Fragment, useEffect, useState } from "react";

const ListUsernames = () => {

    const [users, setUsers] = useState([]);

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
                    <tr>
                        <td>{users.description}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                ))}

            </tbody>
        </table>
    </Fragment>
)};

export default ListUsernames;