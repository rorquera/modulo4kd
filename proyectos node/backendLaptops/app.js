const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const puerto = 3001;

//funcion de middleware

app.use(bodyParser.json());

app.use('/laptops', (req, resp, next) => {
  console.log('Ingresa a la funcion de middleware');
  console.log('headers ', req.headers);
  console.log('body ', req.body);
  next();
});

//contacto: id, nombre, apellido, celular

app.get('/laptops', (request, response) => {
  const laptops = [
    {
      id: 100,
      marca: 'Lenovo',
      procesador: 'intel core i5',
      memoria: '16 GB',
      disco: '1 TB',
    },
    {
      id: 200,
      marca: 'HP',
      procesador: 'intel core i3',
      memoria: '8 GB',
      disco: '500 GB',
    },
    {
      id: 300,
      marca: 'Dell',
      procesador: 'intel core i7',
      memoria: '32 GB',
      disco: '1 TB',
    },
    {
      id: 400,
      marca: 'Toshiba',
      procesador: 'raizor 9',
      memoria: '32 GB',
      disco: '2 TB',
    },
    {
      id: 500,
      marca: 'Asus',
      procesador: 'intel core i9',
      memoria: '32 GB',
      disco: '2 TB',
    },
  ];
  console.log('Ingresa al get');
  response.send(laptops);
});

app.get('/laptops/:idParam', (request, response) => {
  const laptops = [
    {
      id: 200,
      marca: 'HP',
      procesador: 'intel core i3',
      memoria: '8 GB',
      disco: '500 GB',
    },
  ];
  console.log('Ingresa al get');
  const id = request.params.idParam;
  console.log('id: ' + id);
  response.send(laptops);
});

app.post('/laptops', (req, resp) => {
  console.log('Ingresa al post');
  const id = req.body.id = 55;
  console.log('id: ' + id);
  resp.send(req.body);
});

app.put('/laptops/:idParam', (req, resp) => {
  console.log('Ingresa al put');
  const id = req.params.idParam;
  console.log('id: ' + id);
  resp.send(req.body);
});

app.delete('/laptops/:id', (req, resp) => {
  console.log('Ingresa al delete');
  const id = req.params.id;
  console.log('id: ' + id);
  resp.send(req.body);
});

app.listen(puerto, () => {
  console.log('Servidor listo en el puerto ' + puerto);
});
