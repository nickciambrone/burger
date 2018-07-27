
var orm = require("../config/orm.js");
//create the code that will call the ORM functions using burger specific input for the ORM.
// $("#addBurger").on("click",function(){

// })
var burger = {
    viewAll: function (cb) {
        orm.selectAll(
            function (res) {
                cb(res)
            });
    },
    addBurger: function(cb){
        orm.insertOne(function(res){
            cb(res)
        })
}
}
module.exports = burger