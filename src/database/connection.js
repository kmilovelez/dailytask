import sql from 'mssql'
// import './database/connection'


const dbsettings ={
    user: 'sa',
    password:'Matec2021*',
    server:'localhost',//P-JVELEZ',
    database:'MLIDB_BAG_DEV',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
};


async function getConnection(){
    try {
        const pool = await sql.connect(dbsettings);
        return pool;
        // const result= await pool.request().query('select 1');
        // console.log(result);
    } catch (error) {
        console.log(error)
    }
}

getConnection();