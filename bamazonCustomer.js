var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Junio230415",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();
});

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        askCustomer();
    });
}

function askCustomer() {

    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What do you want to do?",
            choices: [
                "See all products",
                "Buy an item",
                "Exit"
            ]
        }
    ]).then(function (answers) {

        switch (answers.action) {
            case "See all products":
                readProducts();
                break;
            case "Buy an item":
                buyItem();
                break;
            case "Exit":
                exitApplication();
                break;
        }
    });
}

function buyItem() {
    inquirer.prompt([
        {
            type: "input",
            name: "buyItem",
            message: "Please introduce the id of the item you want to buy."
        },
        {
            type: "input",
            name: "buyAmount",
            message: "Please introduce the amount of items you want to buy."
        }
    ]).then(function (answers) {
        buyProduct(answers.buyItem, answers.buyAmount);
    });
}

function buyProduct(id, amount) {
    connection.query("SELECT * FROM products WHERE ?",
        [{
            item_id: id
        }],
        function (err, res) {
            if (parseInt(res[0].stock_quantity) >= parseInt(amount)) {
                var total = parseInt(res[0].price) * amount;
                updateProduct(id, res[0].stock_quantity, amount);
                console.log("You total amount is: $" + total + " and removed " + amount + " units from " + res[0].product_name + "\n");
            } else {
                console.log("We don't have enough units to complete your request\n");
                askCustomer();
            }
        });
}

function updateProduct(id, originalStock, amountToReduce) {
    console.log("Updating all Rocky Road quantities...\n");
    var remaining = parseInt(originalStock) - parseInt(amountToReduce);
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: remaining
            },
            {
                item_id: id
            }
        ],
        function (err, res) {
            askCustomer();
        }
    );

    // // logs the actual query being run
    // console.log(query.sql);
}


function exitApplication() {
    connection.end();
}