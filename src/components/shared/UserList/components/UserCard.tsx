// Špatné pořadí importů, špatné uvozovky, špatné odsazení,
import style from './UserCard.module.css';
// tímto jste si vytvořil krásnou cyklickou závislost
// UserCard -> index.tsx -> UserList -> UserCard -> index.tsx -> UserList -> ...
// mport {Icon} from "Components/shared/Icon/Icon";
import {Icon} from "Components/shared";

interface UserCardProps {
    user: UserType
}

/*
buď:
export const UserCard = ({ user }: UserCardProps) => (
    <div className={style.card}>
    ...

nebo:
export const UserCard = ({ user }: UserCardProps) => {
    const { address: { geo }, email, name, phone, } = user;
    const { lat, lng } = geo;

    return (
*/
// chybí návratový typ
export const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className={style.card}>
            <div className={style.cardBody}>
                <h2 className={style.cardTitle}>
                    {/* className={clsx(style.icon, style.personIcon)}  atd.*/}
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

