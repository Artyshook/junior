// evidentně jste si nevšimnul linterů
// nepoužité useState, mezery před závorkami
import {ReactElement, useState} from 'react';
// import stylopisu až na konec
import style from './Home.module.css';
// dvojité uvozovky v JS (i dále)
import {Button, Icon, UserList} from "Components/shared";
// proč je hook v komponentách?
import useFetchUsers from "Components/shared/hooks/useFetchUsers";

// Prázdný řádek za { a špatná odsazení
const Home = (): ReactElement => {

    const { users, error, fetchUsers, loading } = useFetchUsers();

  return (
    <main className={style.home}>
      <h1>User list</h1>
      {/* variant="secondary" onClick={fetchUsers} */}
        <Button variant={"secondary"} onClick={() => fetchUsers()}>
          {/* {loading ? 'Loading...' : <Icon iconName="download"/>} */}
            {loading ? "Loading..." : <Icon iconName={"download"}/>}
        </Button>
        {/* Proč tady je angličtina a jinde je to česky? */}
        {error && <p>There was an error fetching users</p>}
        {!loading && <UserList users={users} />}
    </main>
  );
};

export default Home;
