import sql from 'mssql'
import config from '../config'

// const parser = require('mssql-connection-string');

// const connectionString = "Data Source=dailytask01-server.database.windows.net;Initial Catalog=dailytask01;User Id=dailytask01-server-admin@dailytask01-server.database.windows.net;Password=74DXQ0545211RT73$";

// const knexDb = parser(connectionString);



const sql_settings ={
    user:       config.user,
    password:   config.password,
    server:     config.server,
    database:   config.database,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
};



export async function getConnection(){
    try {
        const pool = await sql.connect(sql_settings);
        
        return pool;
    } catch (error) {
        console.log(error)
    }
}
// export {sql, getConnection}
export {sql}