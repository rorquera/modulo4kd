const ip = '192.168.1.19';
const port = '3001';
const url = 'http://' + ip + ':' + port + '/';

export const getAllContacts = (fnRefreshList) => {
  fetch(url + 'contactos')
    .then((resp) => {
      return resp.json();
    })
    .then((body) => {
      return fnRefreshList(body);
    });
};

export const saveContactRest = (contact, fnShowMessage) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: contact.name,
      apellido: contact.surName,
      celular: contact.phone,
    }),
  };
  fetch(url + 'contactos', config)
    .then((respuesta) => respuesta.json())
    .then((body) => {
      fnShowMessage();
      console.log(body);
    });
};

export const updateContactRest = (contact, fnShowMessage) => {
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: contact.name,
      apellido: contact.surName,
      celular: contact.phone,
    }),
  };
  fetch(url + 'contactos/' + contact.id, config)
    .then((respuesta) => respuesta.json())
    .then((body) => {
      fnShowMessage();
      console.log(body);
    });
};
