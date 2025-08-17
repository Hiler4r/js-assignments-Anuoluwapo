let bankAccount = {
    balance: 0,

    deposit: function(amount) {
        this.balance += amount
        console.log(`Deposited: ${amount}`)
    },

    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount
            console.log(`Withdrew: ${amount}`)
        } else {
            console.log(`Insufficient funds to withdraw: ${amount}`)
        }
    },

    checkBalance: function() {
        console.log(`Current balance: ${this.balance}`)
    }
}

bankAccount.deposit(100)
bankAccount.checkBalance()
bankAccount.withdraw(50)
bankAccount.checkBalance()
bankAccount.withdraw(90)