const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const puerto = 3001;

//funcion de middleware

app.use(bodyParser.json());

app.use('/contactos', (req, resp, next) => {
  console.log('Ingresa a la funcion de middleware');
  console.log('headers ', req.headers);
  console.log('body ', req.body);
  next();
});

//contacto: id, nombre, apellido, celular

app.get('/contactos', (request, response) => {
  const contactos = [
    { id: 1, nombre: 'Pepe', apellido: 'Perez', celular: '0995887878' },
    { id: 2, nombre: 'Mario', apellido: 'Mas', celular: '0995887879' },
    { id: 3, nombre: 'Juan', apellido: 'Zas', celular: '0995887888' },
  ];
  console.log('Ingresa al get');
  response.send(contactos);
});

app.post('/contactos', (req, resp) => {
  console.log('Ingresa al post');
  req.body.id = 99;
  resp.send(req.body);
});

app.put('/contactos/:idParam', (req, resp) => {
  console.log('Ingresa al put');
  const id = req.params.idParam;
  console.log('id: ' + id);
  resp.send(req.body);
});

app.delete('/contactos/:id', (req, resp) => {
  console.log('Ingresa al delete');
  const id = req.params.id;
  console.log('id: ' + id);
  resp.send(req.body);
});

app.listen(puerto, () => {
  console.log('Servidor listo en el puerto ' + puerto);
});
