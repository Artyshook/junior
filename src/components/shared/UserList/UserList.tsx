import {UserCard} from "./components/UserCard";
import {UserType} from "Components/shared/UserList/types";
import style from './UserList.module.css';

interface UserListProps {
    // Osobně preferuji generika: Array<UserType>
    users: UserType[];
}
/*
const UserList = ({ users }: UserListProps) => (
    <div className={style.list}>
        {users.map(user => (
            <UserCard key={user.id} user={user} />
        ))}
    </div>
);

Pokud bude users prázdné pole, stále tam pro něj bude kontejner...
*/
// chybí návratový typ
const UserList = ({ users }: UserListProps) => {
    return (
        <div className={style.list}>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
