import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BASE_URL from '../api';

export async function loader() {
    const userDatas = await fetch(`${BASE_URL}/users`);
    const users = await userDatas.json();
    return { users };
}

function Users() {
    const { users } = useLoaderData();
    const [loadedUsers, setLoadedUsers] = useState(users);

    useEffect(() => {
        setLoadedUsers(users);
    }, [users]);

    const deleteUser = async (userId) => {
        try {
            const response = await fetch(`${BASE_URL}/users/user/${userId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Filter out the deleted user
                const updatedUsers = loadedUsers.filter(user => user._id!== userId);
                setLoadedUsers(updatedUsers);
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error.message);
        }
    };

    return (
        <main className='users-sec bg-dark w-100 p-4'>
            <div className="container">
                <div className="row">
                    {
                        loadedUsers && loadedUsers.map((user) => {
                            return (
                                <div className="col-lg-12" key={user._id}>
                                    <div className="user-box">
                                        <h4>{user.userName}</h4>
                                        <p>{user.userEmail}</p>
                                        <span>{user._id}</span>
                                        {/* Delete Button */}
                                        <button onClick={() => deleteUser(user._id)} className="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </main>
    );
}

export default Users;