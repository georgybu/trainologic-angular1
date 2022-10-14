import TreeViewModel from './Tree/TreeViewModel'
import NodeViewModel from './Tree/NodeViewModel'

/**
 * @class ContactTreeController
 * @implements ContactTreeOutput
 * @implements TreeInput
 */
class ContactTreeController {
  /**
   * @param {ContactTreeInput} contactTree
   * @private
   */
  constructor (contactTree) {
    this._contactTree = contactTree
    /**
     * @type {TreeOutput}
     * @private
     */
    this._treeOutput = null
  }
}

ContactTreeController.prototype.presentContacts = function (response) {
  let treeResponse = new TreeViewModel()

  for (let i = 0; i < response.contacts.length; i++) {
    let node = new NodeViewModel()
    node.id = response.contacts[i].id
    node.title = response.contacts[i].name
    node.hasNodes = response.contacts[i].hasContacts

    treeResponse.tree.push(node)
  }

  this._treeOutput.presentTree(treeResponse)
}

ContactTreeController.prototype.getTree = function (id, output) {
  this._treeOutput = output
  this._contactTree.getContacts(id, this)
}

export default ContactTreeController
