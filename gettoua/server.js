const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
var bodyParser = require("body-parser");



const app = express()


app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.listen(3000)



app.post('/login', function (req, res, next) {
	city_name = req.body.city;

	if (city_name == "kiyv") {
		console.log('next');
		res.send(city_name);
		next();
	}

	console.log("User name = " + city_name);


	res.end("yes");


});



// app.engine('.js', exphbs({
// 	defaultLayout: 'main',
// 	extname: '.js',
// 	layoutsDir: path.join(__dirname, 'js')
// }))

// app.set('js engine', '.js')
// app.set('js', path.join(__dirname, 'js'))


// app.engine('.css', exphbs({
// 	defaultLayout: 'styles',
// 	extname: '.css',
// 	layoutsDir: path.join(__dirname, 'styles')
// }))
// app.set('styles engine', '.css')
// app.set('styles', path.join(__dirname, 'styles'))




// app.get('/', function (req, res) {

// 	res.json([
// 		{
// 			t1:'1',
// 			t2:'2',
// 			t3:'3'
// 		},
// 		{
// 			t1:'1',
// 			t2:'2',
// 			t3:'3'
// 		}
// 	]);

// })


//Подключаем middleware для того, что бы в req добавилось body
// app.use(express.urlencoded());
// //Обрабатываем наш запрос
// app.post('/path', function (req, res, next) {
//     console.log(req.body)// содержит данные, переданные от клиента
//     res.end('Наш ответ клиенту')
// });

