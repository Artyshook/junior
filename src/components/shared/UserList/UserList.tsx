import {ReactElement} from 'react';
import {UserCard} from './components/UserCard';
import {IUser} from 'Components/shared/UserList/types';
import style from './UserList.module.css';


interface UserListProps {
    users: Array<IUser>;
}

const UserList = ({ users }: UserListProps): ReactElement => (
        <div className={style.list}>
            {users.length > 0 && users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
);

export default UserList;


