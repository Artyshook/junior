export { default as Button } from './Button/Button';
export { default as Icon } from './Icon/Icon';
// tímto jste si vytvořil krásnou cyklickou závislost
// UserCard -> index.tsx -> UserList -> UserCard -> index.tsx -> UserList -> ...
// chybí řádek na konci souboru
export {default as UserList} from  './UserList/UserList'