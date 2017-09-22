/**
 * @interface ContactTreeInput
 */
class ContactTreeInput {
  /**
   * @param {number} id
   * @param {ContactTreeOutput} output
   */
  getContacts (id, output) {}
}

module.exports = ContactTreeInput
