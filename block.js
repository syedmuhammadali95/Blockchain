class Block
 {
    constructor ()

    {
        this.index = 0;
        this.previousHash = "000000000";
        this.hash = "";
        this.once = 0;
        this.transaction = [];
    }
    get key ()
    {
        return JSON.stringify(this.transaction) + this.index+ this.previousHash+  this.once
    }

    addtransaction(transaction)
    {
        this.transaction.push(transaction)
    } 
}
module.exports = Block