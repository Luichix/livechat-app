import { messageTransaction } from '../services/sql/sentence'
import Message from '../models/message'

describe('Sentence SQL', () => {
  it('Message Transaction', () => {
    const test = messageTransaction(object)
    expect(test).toContain('Luichix')
  })
  it('Model Message', () => {
    const test = new Message(object)
    expect(test).toContain('Perro')
  })
  it('Chatroom State', () => {
    const listRooms = getListChatRoom(CHATROOMSTATE.chatrooms)
    const test = modifyChatRooms(listRooms, CHATROOMSTATE.chatrooms)
    expect(test).toEqual(TESTCHATROOM)
  })
  it('Chatroom State', () => {
    const test = searchLastMessage(TESTCHATROOM, object2)
    expect(test).toEqual(object2)
  })
  it('Datetime', () => {
    const datetime = new Date()
    const test = datetime.toISOString()
    console.log(test)
    expect(test).toContain('-')
  })
})

const searchLastMessage = (array, payload) => {
  const newArray = array.map((e) => {
    if (e.rid === payload.rid) {
      e.lastMessage = {
        cid: payload.cid,
        text: payload.text,
        datetime: payload.datetime,
        channel: payload.channel,
        user: {
          senderID: payload.senderID,
          name: payload.name,
          kind: payload.kind,
        },
      }
    }
    return e
  })
  return newArray
}

export const modifyChatRooms = (rooms, data) => {
  return rooms.map((e) => {
    e.users = []
    for (const prop of data) {
      if (e.rid === prop.rid) {
        e.users.push({
          senderID: prop.senderID,
          name: prop.name,
          avatar: prop.avatar,
          kind: prop.kind,
        })
        if (prop.cid) {
          e.lastMessage = {
            cid: prop.cid,
            text: prop.text,
            datetime: prop.datetime,
            channel: prop.channel,
            user: {
              senderID: prop.senderID,
              name: prop.name,
              kind: prop.kind,
            },
          }
        }
      }
    }
    return e
  })
}

export const getListChatRoom = (array) => {
  const newArray = []
  for (const element of array) {
    if (newArray.length === 0) {
      newArray.push({ rid: element.rid })
    } else {
      let be = false
      for (let index = 0; index < newArray.length; index++) {
        if (newArray[index].rid === element.rid) {
          be = true
          break
        } else {
          be = false
        }
      }
      if (!be) {
        newArray.push({ rid: element.rid })
      }
    }
  }
  return newArray
}

const TESTCHATROOM = [
  {
    rid: 'AR2',
    users: [
      {
        senderID: 'AN2',
        name: 'Luichix',
        avatar:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
        kind: 'Client',
      },
      {
        senderID: 'AN3',
        name: 'Manu',
        avatar:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
        kind: 'Client',
      },
    ],
    lastMessage: {
      cid: '1.662817888456E12',
      user: {
        senderID: 'AN3',
        name: 'Manu',
        kind: 'Client',
      },
      text: 'Test 2',
      datetime: '02:00:00',
      channel: 'Web',
    },
  },
  {
    rid: 'AR3',
    users: [
      {
        senderID: 'AN2',
        name: 'Luichix',
        avatar:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
        kind: 'Client',
      },
      {
        senderID: 'AN4',
        name: 'Regin',
        avatar:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
        kind: 'Client',
      },
    ],
    lastMessage: {
      cid: '1.662817888456E12',
      user: {
        senderID: 'AN4',
        name: 'Regin',
        kind: 'Client',
      },
      text: 'Test 3',
      datetime: '02:00:00',
      channel: 'Web',
    },
  },
]

const CHATROOMSTATE = {
  chatrooms: [
    {
      avatar:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
      channel: null,
      cid: null,
      datetime: null,
      id: 1,
      kind: 'Client',
      name: 'Luichix',
      senderID: 'AN2',
      organization: 'None',
      rid: 'AR2',
      text: null,
    },
    {
      avatar:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
      channel: 'Web',
      cid: '1.662817888456E12',
      datetime: '02:00:00',
      id: 2,
      kind: 'Client',
      name: 'Manu',
      senderID: 'AN3',
      organization: 'None',
      rid: 'AR2',
      text: 'Test 2',
    },
    {
      avatar:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
      channel: null,
      cid: null,
      datetime: null,
      id: 1,
      kind: 'Client',
      name: 'Luichix',
      senderID: 'AN2',
      organization: 'None',
      rid: 'AR3',
      text: null,
    },
    {
      avatar:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
      channel: 'Web',
      cid: '1.662817888456E12',
      datetime: '02:00:00',
      id: 3,
      kind: 'Client',
      name: 'Regin',
      senderID: 'AN4',
      organization: 'None',
      rid: 'AR3',
      text: 'Test 3',
    },
  ],
}

const object = {
  senderID: '1',
  name: 'Luichix',
  kind: 'User',
  avatar: 'avatar',
  organization: 'None',
  rid: 'D1',
  date: '08/09/22',
  cid: 'C1000',
  datetime: '22:51:00',
  text: 'Hello World',
  channel: 'Web',
}

const object2 = {
  cid: 'cid',
  rid: 'AR3',
  senderID: 'AN4',
  name: 'Regin',
  kind: 'Client',
  text: 'Good',
  datetime: '2020-10-03T14:48:00.000Z',
  date: '08/09/22',
  channel: 'Web',
  avatar: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
  organization: 'None',
}

const timeExecute = (fn, name, ...params) => {
  const start = Date.now()
  const result = fn(...params)
  const end = Date.now()
  console.log(`Time Execute ${name}: ${end - start}ms`)
  return result
}

export default timeExecute
