var connection =require('./connection.js')
var orm={
    selectAll:function(cb){
        var queryString= 'SELECT * FROM burger';
        connection.query(queryString, function(err,result){
            if (err) throw err;
            cb(result) ;
        })
    },
    insertOne:function(burgerName){
        var queryString="INSERT INTO burger (burger_name, devoured) VALUES (?, false);"
        connection.query(queryString,[burgerName],function(err,result){
            if (err){throw err;} 
            cb(result);
        })

    },
    updateOne:function(){}
}
module.exports = orm
