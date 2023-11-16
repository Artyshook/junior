import { useState } from 'react';
import {UserType} from "Components/shared/UserList/types";

const useFetchUsers = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const fetchUsers = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json() as UserType[];
            setUsers(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
            console.error("There was a problem with the fetch operation:", err);
        } finally {
            setLoading(false);
        }
    };

    return { users, error, loading, fetchUsers };
};

export default useFetchUsers;
