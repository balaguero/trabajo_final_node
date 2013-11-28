var Sequelize = require('sequelize');
/**
 * Utils
 */

exports.dbConnection = function(url,dbname,dbuser,dbpass){

	var db = new Sequelize('trabajofinal','root',{ dialect: 'mysql'});
	return db;
	
};

// exports.dbConnectionString = function(url,dbname,dbuser,dbpass){

// 	var connStr ='mongodb://'; 
	
// 	if(dbuser != "" || dbpass != "") {
// 		connStr += dbuser+':'+dbpass+'@'+url+'/'+dbname;
// 	} else {
// 		connStr += url+'/'+dbname;
// 	}

//     return connStr;
// };
