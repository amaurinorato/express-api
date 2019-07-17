const users = [{
        id: 1,
        name: "Richard Hendricks",
        email: "richard@piedpiper.com",
    },
    {
        id: 2,
        name: "Bertram Gilfoyle",
        email: "gilfoyle@piedpiper.com",
    },
];

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
	
	app.get('/users', (request, response) => {
		response.send(users);
	});
	
	app.post('/noticia', (request, response) => {
		var body = request.body;
		body.id = 1;
		body.novaPropertie = "nova propertie";
		response.send(body);
	});
}

module.exports = router;