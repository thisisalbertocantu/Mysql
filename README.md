# Project Title
Node.js - MySQL Amazon storefront

# How it works
The application shows to the users the list of items available in the store, the names and the prices.

# How to use it
The app prompts users with three messages:

* Option to ask the ID of the product they would like to buy.
* Option to ask how many units of the product they would like to buy.
* Option to exit application

# MySQL Information
* Database is called "bamazon"
* Table is called "products"
* Table columns are: 
  * item_id (unique id for each product)
  * product_name (Name of product)
  * department_name
  * price (cost to customer)
  * stock_quantity (how much of the product is available in stores)

# Built with
* [Node.js](https://nodejs.org/)
* [MySQL](https://www.mysql.com)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)

# Working Proof
The application shows all products with: item_id, product_name and price
![image of all_products](https://github.com/thisisalbertocantu/Node.js-MySQL/blob/master/images/all_products.png)

When the user chooses "Select all products"
![select all_products](https://github.com/thisisalbertocantu/Node.js-MySQL/blob/master/images/select all_products.png)
