export default {
  id: '1',
  users: [
    {
      _id: 'Z0DaA1qsdGPhpBBQoVtmB14Kq3j2',
      name: 'Tavito',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
    },
    {
      _id: '9PT5dj7wtDQ2vGq98RtbXHakBy62',
      name: 'Nexus Bot',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
    },
    {
      _id: 'qohQKC6CmgMLNPaEyjNSfv3zCYj2',
      name: 'Luichix',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/luichix.jpg',
    },
  ],
  messages: [
    {
      id: 'm0',
      text: 'Hola',
      createdAt: '2022-10-10T12:48:00.000Z',
      sent: true,
      received: true,
      pending: true,
      user: {
        _id: 'qohQKC6CmgMLNPaEyjNSfv3zCYj2',
        name: 'Luichix',
      },
    },
    {
      id: 'm2',
      text: 'Hola',
      createdAt: '2022-10-10T14:49:00.000Z',
      user: {
        _id: 'Z0DaA1qsdGPhpBBQoVtmB14Kq3j2',
        name: 'Nexus Bot',
      },
      sent: false,
      received: false,
      pending: true,
    },
    {
      id: 'm1',
      text: 'Todo bien',
      createdAt: '2022-10-10T12:48:00.000Z',
      sent: true,
      received: true,
      pending: true,
      user: {
        _id: 'Z0DaA1qsdGPhpBBQoVtmB14Kq3j2',
        name: 'Tavito',
      },
    },
    {
      id: 'm3',
      text: 'Aqui pasandola, mira queria consultarte si ibas a poder llegar a la oficina.',
      createdAt: '2022-10-10T14:49:40.000Z',
      user: {
        _id: 'qohQKC6CmgMLNPaEyjNSfv3zCYj2',
        name: 'Luichix',
      },
      sent: true,
      received: true,
      pending: true,
    },
    {
      id: 'm4',
      text: 'Si, voy a estar por alla, lo unico que hasta dentro de una hora, necesitaba hacer algunas cosas primero. Pero puedes comentarme que necesitas para ir viendolo.',
      createdAt: '2022-10-10T14:50:00.000Z',
      user: {
        _id: 'Z0DaA1qsdGPhpBBQoVtmB14Kq3j2',
        name: 'Tavito',
      },
      sent: true,
      received: true,
      pending: true,
    },
    {
      id: 'm5',
      text: 'En todo caso me comentas.',
      createdAt: '2022-10-10T14:51:00.000Z',
      user: {
        _id: 'Z0DaA1qsdGPhpBBQoVtmB14Kq3j2',
        name: 'Nexus Bot',
      },
      sent: true,
      received: true,
      pending: true,
    },
    {
      id: 'm6',
      text: 'Vale, gracias. Mira necesitaba que revisaras si hay algun error en el codigo. No me levanta el servidor desde mi lado, asi que talvez es posible que no se hayan subido los cambios al repositorio o talvez sea yo el del inconveniente.',
      createdAt: '2022-10-10T14:49:00.000Z',
      user: {
        _id: 'qohQKC6CmgMLNPaEyjNSfv3zCYj2',
        name: 'Luichix',
      },
      sent: true,
      received: true,
      pending: true,
    },
    {
      id: 'm7',
      text: 'Vale, perfecto. Comprendo',
      createdAt: '2022-10-10T14:53:00.000Z',
      user: {
        _id: 'Z0DaA1qsdGPhpBBQoVtmB14Kq3j2',
        name: 'Nexus Bot',
      },
      sent: true,
      received: true,
      pending: true,
    },
  ],
}
