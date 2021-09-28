var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port:3306,
  user: "root",
  password: "SH@lom&g0d",
  database: "shtrangy"
});
var user_details = select("user_id","shalom.p")
console.log(user_details)

function select(key,value){
    var result;
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql="SELECT * FROM users WHERE "+ key +" = ?";
        con.query(sql,[value], a);
        function a(err, rslt) {
            if (err) throw err;
            result= rslt;
        }
    });
    return result;
}