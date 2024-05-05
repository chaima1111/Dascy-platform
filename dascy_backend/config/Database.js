import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db', 'root', 'mondorosa2392004', {
    host: "localhost",
    dialect: "mysql"
});

export default db;