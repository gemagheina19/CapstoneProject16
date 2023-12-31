const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const cityyRoute = require('./app/routes/city.routes');
const pakettRoute = require('./app/routes/paket.routes');
const userRoute = require('./app/routes/user.routes');
const roomsRoute = require('./app/routes/rooms.routes');






//RENDER BARU

const cityController = require('./controllers/cityController');
const bandungUtaraController = require('./controllers/bandungUtaraController');
const detailRoomsController = require('./controllers/detailRoomsController');
const bookingDetailController = require('./controllers/bookingDetailController');
const pembayaran1Controller = require('./controllers/pembayaran1Controller');
const pembayaran2Controller = require('./controllers/pembayaran2Controller');
const loginController = require('./controllers/loginController');
const indexController = require('./controllers/indexController');

const kotaController = require('./controllers/kotaController');

//GET PAGE (RENDER FILE HTML)
app.get('/city', cityController.getCityPage);
app.get('/bandung-utara', bandungUtaraController.getPage);
app.get('/detail-rooms', detailRoomsController.getPage);
app.get('/booking-detail', bookingDetailController.getPage);
app.get('/pembayaran1', pembayaran1Controller.getPage);
app.get('/pembayaran2', pembayaran2Controller.getPage);
app.get('/login', loginController.getPage);
app.get('/', indexController.getPage);
 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());


const db = require('./app/models');
db.sequelize.sync();
//




//KOTA STATIC API
app.get('/kota', kotaController.getAllKota);
app.get('/kota/:id', kotaController.getKotaById);
app.get('/kota/nama/:namaKota', kotaController.getKotaByNama);
app.post('/kota', kotaController.createKota);
app.put('/kota/:id', kotaController.updateKotaById);
app.delete('/kota/:id', kotaController.deleteKotaById);



app.use('/api/cities', cityyRoute);
app.use('/api/package', pakettRoute);
app.use('/api/users', userRoute);
app.use('/api/rooms', roomsRoute);



app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});


