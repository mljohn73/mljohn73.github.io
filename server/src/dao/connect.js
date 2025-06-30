"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    user: 'sgpostgres',
    host: 'https://localhost:5432',
    database: 'postgres',
    password: '1317',
    port: 5432,
});
function open() {
    client.connect(function (err) {
        if (err)
            throw err;
        console.log("Connected!");
    });
}
exports.default = open;
