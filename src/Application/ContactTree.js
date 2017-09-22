const ContactTreeResponse = require('./ContactTreeResponse')
const ContactResponse = require('./ContactResponse')

/**
 * @class ContactTree
 * @implements ContactTreeInput
 */
class ContactTree {
  constructor () {
    this._data = [
      {
        id: 1,
        name: 'Friends',
        type: 'Group',
        contacts: [
          {id: 2, name: 'Udi', type: 'Contact'},
          {id: 3, name: 'Tommy', type: 'Contact'},
          {
            id: 6,
            name: 'Old Friends',
            type: 'Group',
            contacts: [
              {id: 7, name: 'Itay', type: 'Contact'}
            ]
          }
        ]
      },
      {
        id: 4,
        name: 'Family',
        type: 'Group',
        contacts: [
          {id: 5, name: 'Roni', type: 'Contact'}
        ]
      },
      {id: 8, name: 'Ori', type: 'Contact'}
    ]
  }
}

ContactTree.prototype.getContacts = function (id, output) {
  if (id === null) {
    return output.presentContacts(createResponse(this._data))
  }

  let node = findNode(id, this._data)
  if (node !== null && node.hasOwnProperty('contacts')) {
    return output.presentContacts(createResponse(node.contacts))
  }

  return null
}

function createResponse (tree) {
  let response = new ContactTreeResponse()

  for (let i = 0; i < tree.length; i++) {
    let contact = new ContactResponse()
    contact.id = tree[i].id
    contact.name = tree[i].name
    contact.type = tree[i].type
    contact.hasContacts = (tree[i].type === 'Group')

    response.contacts.push(contact)
  }

  return response
}

function findNode (id, tree) {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].id === id) {
      return tree[i]
    }

    if (tree[i].hasOwnProperty('contacts')) {
      let result = findNode(id, tree[i].contacts)
      if (result !== null) {
        return result
      }
    }
  }

  return null
}

module.exports = ContactTree
