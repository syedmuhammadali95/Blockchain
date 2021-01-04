let sha256 = require('js-sha256')
class Blockchain {
    constructor(gensisBlock)
    {
        this.blocks = []
        this.addBlock(gensisBlock)
    }
    addBlock(block)
    {
        if(this.blocks.length == 0)
        {
            block.previousHash = "000000000"
            block.hash = this.generatHash(block)
        }

        this.blocks.push(block)

    }
    generatHash(block)
        {
            let hash = sha256(block.key)
            return hash
        }
}

module.exports = Blockchain
