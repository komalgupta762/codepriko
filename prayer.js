var http=require("http");
var url=require("url");
var query=require("querystring");

function process_request(req,resp)
{
	//resp.writeHead(200,{'content-Type':'text/html');
	//var u=req.url;
	//console.log(u);
	var p=url.parse(req.url);
	
	
	var q=query.parse(p.query);
	
	console.log(q);
	switch(p.pathname)
	{
	 case '/':
       	 
		resp.write("u r in /");
		resp.end();
		break;
	case '/about':
       	 
		resp.write("u r in about");
		
		resp.write(parseInt(q.a)+parseInt(q.b));
		
		resp.end();
		break;	
	
	default:
       	resp.write("byeeeeeeeeeeeeeee");
		
		

	}
		 console.log(p);
	
//resp.write("<h1>hello world</h1>");
resp.end();

}
var s=http.createServer(process_request)
s.listen(6000);