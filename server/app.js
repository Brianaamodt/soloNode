/**
 * Created by brianaamodt on 5/8/15.
 */
var express = require ('express');
var app = express();

var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.get("/*", function(request, response){
    var file = request.params[0] || "views/index.html";
    response.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function(){
    console.log("app is running on port: ", app.get('port'));
});
