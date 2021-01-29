var http = require('http');
var cloudClient = require('./googleCloudClient');


function main(request,response)
{
    response.writeHead(200,{'content-type': "application/json","Access-Control-Allow-Origin" : "*"});
    console.log(request.method);
    let requestBody = '';
    if (request.method == "POST" && request.url === "/vision")
    {
        request.on('data',function(data){requestBody += data});
        request.on('end',function(){
            const req_url = JSON.parse(requestBody);
            cloudClient.getWebEntities(req_url.payload).then(data => 
                {
                    data = JSON.parse(data);
                    response.end(JSON.stringify(data[0].description))
                });
        });
    }
}


http.createServer(main).listen(8000,"localhost");