/**
 * @class ContactResponse
 */
class ContactResponse {
  constructor () {
    /**
     * @type {number}
     */
    this.id = null
    /**
     * @type {string}
     */
    this.name = ''
    /**
     * @type {('Contact'|'Group')}
     */
    this.type = 'Contact'
    /**
     * @type {boolean}
     */
    this.hasContacts = false
  }
}

export default ContactResponse
