import React, {useEffect, useState} from 'react';
import AdminPanelDelete from "../components/AdminPanelDelete.jsx";
import RoleSeparator from "../components/RoleSeparator.jsx";

function AdminPanel(props) {

    const [users, setUsers] = useState([]);
    //const [usersChanged, setUsersChanged] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:8080/api/info/all');
            const data = await response.json();
            setUsers(data);
        }
        getData();
    }, []);



    return (
        <>
            {users.length &&
                <table className="userTable">
                <thead>
                <tr>
                    <th>Id</th><th>Username</th><th>Role</th><th></th>
                </tr>
                </thead>
                <tbody>{users.map((user) => {
                    return (<tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.userName}</td>
                            <td>{user.roles.toString()}</td>


                            <td><AdminPanelDelete user={user} users={users} setUsers={setUsers}/></td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            }
        </>
    );
}

export default AdminPanel;