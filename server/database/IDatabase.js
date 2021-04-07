const fs = require("fs");

class DatabaseInterface
{
    constructor(databaseName)
    {
        this.databaseName = __dirname + databaseName;

        this.read();
    }

    get()
    {
        return this.currentData;
    }

    add( data = {} )
    {
        if (!data) throw Error("Data to add is empty");

        this.currentData.coins[data.currencyApiName] = {
            currency: data.currency
        }

        fs.writeFileSync(this.databaseName, JSON.stringify(this.currentData) );
    }


    read()
    {
        this.currentData = JSON.parse( fs.readFileSync(this.databaseName, 'utf-8') );
    }


    update( data = {} )
    {
        if (!data) throw Error("Data to update is empty");

        this.currentData.coins[data.currencyApiName] = {
            currency: data.currency
        }

        fs.writeFileSync(this.databaseName, JSON.stringify(this.currentData) );
    }


    delete( currencyApiName )
    {
        if (!currencyApiName) throw Error("Currency API Name to delete is empty");

        delete this.currentData.coins[currencyApiName];

        fs.writeFileSync(this.databaseName, JSON.stringify(this.currentData) );
    }
}


module.exports = DatabaseInterface;