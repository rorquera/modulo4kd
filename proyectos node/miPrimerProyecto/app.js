const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const puerto = 3001;
const { Client } = require('pg');

//instanciar el objeto client para conectarse a la base de datos

const client = new Client({
  user: 'postgres',
  host: '192.168.1.19',
  database: 'pruebas',
  password: 'admin',
  port: 5432,
});

//funcion de middleware

app.use(bodyParser.json());

app.use('/contactos', (req, resp, next) => {
  console.log('Ingresa a la funcion de middleware');
  console.log('headers ', req.headers);
  console.log('body ', req.body);
  next();
});

//contacto: id, nombre, apellido, celular

// app.get('/contactos', (request, response) => {
//   const contactos = [
//     { id: 1, nombre: 'Pepe', apellido: 'Perez', celular: '0995887878' },
//     { id: 2, nombre: 'Mario', apellido: 'Mas', celular: '0995887879' },
//     { id: 3, nombre: 'Juan', apellido: 'Zas', celular: '0995887888' },
//   ];
//   console.log('Ingresa al get');
//   response.send(contactos);
// });

app.get('/contactos', (request, response) => {
  client.connect();

  client
    .query('select * from contactos')
    .then((responseQuery) => {
      console.log(...responseQuery.rows);
      // client.end();
      response.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });

  console.log('Ingresa al get');
});

// app.post('/contactos', (req, resp) => {
//   console.log('Ingresa al post');
//   req.body.id = 99;
//   resp.send(req.body);
// });

app.post('/contactos', (req, resp) => {
  console.log('Ingresa al post');

  // client.connect();
  client
    .query(
      'insert into contactos (nombre, apellido, celular) values ($1, $2, $3) RETURNING *',
      [req.body.nombre, req.body.apellido, req.body.celular]
    )
    .then((responseQuery) => {
      console.log('Filas afectadas: ' + responseQuery.rowCount); // Imprimir el número de filas afectadas
      console.log('respuesta:', responseQuery.rows[0]); // Imprimir la fila insertada
      // client.end();
      resp.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
});

// app.put('/contactos/:idParam', (req, resp) => {
//   console.log('Ingresa al put');
//   const id = req.params.idParam;
//   console.log('id: ' + id);
//   resp.send(req.body);
// });

app.put('/contactos/:idParam', (req, resp) => {
  console.log('Ingresa al put');
  const id = req.params.idParam;

  // client.connect();
  client
    .query(
      'update contactos set nombre = $1, apellido = $2, celular = $3 where id = $4 RETURNING *',
      [req.body.nombre, req.body.apellido, req.body.celular, id]
    )
    .then((responseQuery) => {
      console.log('Filas afectadas: ' + responseQuery.rowCount); // Imprimir el número de filas afectadas
      console.log('respuesta:', responseQuery.rows[0]); // Imprimir la fila insertada
      // client.end();
      resp.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
});

// app.delete('/contactos/:id', (req, resp) => {
//   console.log('Ingresa al delete');
//   const id = req.params.id;
//   console.log('id: ' + id);
//   resp.send(req.body);
// });

app.delete('/contactos/:id', (req, resp) => {
  console.log('Ingresa al delete');
  const id = req.params.id;

  // client.connect();
  client
    .query('delete from contactos where id = $1 RETURNING *', [id])
    .then((responseQuery) => {
      console.log('Filas afectadas: ' + responseQuery.rowCount); // Imprimir el número de filas afectadas
      console.log('respuesta:', responseQuery.rows[0]); // Imprimir la fila insertada
      // client.end();
      resp.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
});

app.listen(puerto, () => {
  console.log('Servidor listo en el puerto ' + puerto);
});
