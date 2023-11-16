import {UserType} from "Components/shared/UserList/types";
import style from './UserCard.module.css';
import {Icon} from "Components/shared";

interface UserCardProps {
    user: UserType
}

export const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className={style.card}>
            <div className={style.cardBody}>
                <h2 className={style.cardTitle}>
                    <Icon iconName="person" className={`${style.icon} ${style.personIcon}`} />
                    {user.name}
                </h2>
                <p className={style.cardDetail}>
                    <Icon iconName="mail" className={`${style.icon} ${style.mailIcon}`} />
                    email: {user.email}
                </p>
                <p className={style.cardDetail}>
                    <Icon iconName="call" className={`${style.icon} ${style.phoneIcon}`} />
                    tel: {user.phone}
                </p>
                <a
                    href={`https://mapy.cz/turisticka?source=coor&id=${user.address.geo.lng}%2C${user.address.geo.lat}&x=${user.address.geo.lng}&y=${user.address.geo.lat}z=16`}
                    className={style.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ukázat na mapě
                </a>
            </div>
        </div>
    );
};

