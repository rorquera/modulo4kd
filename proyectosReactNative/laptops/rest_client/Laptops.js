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
