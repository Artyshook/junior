import {useState} from 'react';
import {IUser} from 'Components/shared/UserList/types';

interface UseFetchUsersResult {
    users: IUser[];
    error: string | undefined ;
    loading: boolean;
    fetchUsers: () => Promise<void>;
}


const useFetchUsers = () : UseFetchUsersResult => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [error, setError] = useState<string | undefined >(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: IUser[] = await response.json();
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
