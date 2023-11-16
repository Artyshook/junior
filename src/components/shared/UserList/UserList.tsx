import {UserCard} from "./components/UserCard";
import {UserType} from "Components/shared/UserList/types";
import style from './UserList.module.css';

interface UserListProps {
    users: UserType[];
}

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
