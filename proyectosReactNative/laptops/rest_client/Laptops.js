const ip = '192.168.1.19';
const port = '3001';
const url = 'http://' + ip + ':' + port + '/';

export const getAllLaptops = (fnRefrescarLista) => {
  fetch(url + 'laptops')
    .then((resp) => {
      return resp.json();
    })
    .then((cuerpo) => {
      fnRefrescarLista(cuerpo);
    });
};

export const guardarLaptopRest = (
  { marca, procesador, memoria, disco },
  fnMostrarMensaje
) => {
  const conf = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      marca,
      procesador,
      memoria,
      disco,
    }),
  };
  fetch(url + 'laptops', conf)
    .then((resp) => resp.json())
    .then((laptop) => {
      fnMostrarMensaje();
      console.log(laptop);
    });
};

export const actualizarLaptopRest = (
  { id, marca, procesador, memoria, disco },
  fnMostrarMensaje
) => {
  const conf = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      marca,
      procesador,
      memoria,
      disco,
    }),
  };
  fetch(url + 'laptops/' + id, conf)
    .then((resp) => resp.json())
    .then((laptop) => {
      fnMostrarMensaje();
      console.log(laptop);
    });
};
