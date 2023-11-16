import {ReactElement, useState} from 'react';
import style from './Home.module.css';
import {Button, Icon, UserList} from "Components/shared";
import useFetchUsers from "Components/shared/hooks/useFetchUsers";

const Home = (): ReactElement => {

    const { users, error, fetchUsers, loading } = useFetchUsers();

  return (
    <main className={style.home}>
      <h1>User list</h1>
        <Button variant={"secondary"} onClick={() => fetchUsers()}>
            {loading ? "Loading..." : <Icon iconName={"download"}/>}
        </Button>
        {error && <p>There was an error fetching users</p>}
        {!loading && <UserList users={users} />}
    </main>
  );
};

export default Home;
