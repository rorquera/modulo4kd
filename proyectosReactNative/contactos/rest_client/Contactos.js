const ip = '192.168.1.19';
const port = '3001';
const url = 'http://' + ip + ':' + port + '/';

export const getAllContacts = (fnRefreshList) => {
  fetch(url + 'contactos')
    .then((resp) => {
      return resp.json();
    })
    .then((body) => {
      // console.log(body);
      fnRefreshList(body);
    });
};
