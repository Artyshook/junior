import {ReactElement} from 'react';
import {Button, Icon, UserList} from 'Components/shared';
import style from './Home.module.css';
import useFetchUsers from "@/utils/hooks/useFetchUsers";

const Home = (): ReactElement => {
    const { users, error, fetchUsers, loading } = useFetchUsers();

    return (
    <main className={style.home}>
      <h1>User list</h1>
        <Button variant="secondary" onClick={fetchUsers}>
            {loading ? 'Načítání...' : <Icon iconName="download"/>}
        </Button>
        {error && <p>Došlo k chybě při načítání uživatelů</p>}
        {!loading && <UserList users={users} />}
    </main>
  );
};

export default Home;
