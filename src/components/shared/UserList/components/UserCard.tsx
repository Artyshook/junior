import {ReactElement} from 'react';
import Icon from '../../Icon/Icon';
import {IUser} from '../types';
import style from './UserCard.module.css';

interface UserCardProps {
    user: IUser
}

export const UserCard = ({ user }: UserCardProps): ReactElement => (
        <div className={style.card}>
            <div className={style.cardBody}>
                <h2 className={style.cardTitle}>
                    <Icon iconName="person" className={`${style.icon} ${style.icon}`} />
                    {user.name}
                </h2>
                <p className={style.cardDetail}>
                    <Icon iconName="mail" className={`${style.icon} ${style.icon}`} />
                    email: {user.email}
                </p>
                <p className={style.cardDetail}>
                    <Icon iconName="call" className={`${style.icon} ${style.icon}`} />
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

