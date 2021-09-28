var mysql = require('mysql');
var a;
let config = {
  host: "localhost",
  port:3306,
  user: "root",
  password: "SH@lom&g0d",
  database: "shtrangy"
};
class Database {
    constructor() {
        this.connection = mysql.createConnection( config );
    }
    select( key, value ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( "SELECT * FROM users where "+key+"=?", value, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}
database=new Database()
database.select("user_id","shalom.p").then( rows => {
    // do something with the result
    a=rows[0].user_id;
    console.log(rows[0].user_id)
} );




/*
var user_details = select("user_id","shalom.p")
console.log(user_details)

function select(key,value){
    var result;
    con.connect(await promisify(function(err){
        if (err) throw err;
        console.log("Connected!");
        var sql="SELECT * FROM users WHERE "+ key +" = ?";
        con.query(sql,[value], a);
        function a(err, rslt) {
            if (err) throw err;
            result= rslt;
            console.log(result)
        }
    })());
    return result;
}

*/