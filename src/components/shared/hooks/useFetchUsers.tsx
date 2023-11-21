// obvyklé chyby: odsazení, uvozovky...
import { useState } from 'react';
import {UserType} from "Components/shared/UserList/types";

// proč je hook v komponentách?
// chybí návratový typ hooku
const useFetchUsers = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    // lépe je používat undefined místo null, null je hodnota
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    // dva prázdné řádky
    // chybí návratový typ funkce
    const fetchUsers = async () => {
        // středníky na konci řádku
        setLoading(true)
        setError(null)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // chybí typizace, jak víte, že ten JSON bude pole? Jak víte, že tam budou správná data?
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
