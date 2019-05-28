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
![select all_products](https://github.com/thisisalbertocantu/Node.js-MySQL/blob/master/images/select_all_products.png)

The user can select an item to buy
![buy_item](https://github.com/thisisalbertocantu/Node.js-MySQL/blob/master/images/buy_item.png)

and specify its quantity, the application will check for the item availability and if it's available, a message 
for the total amount to paid will be displayed, otherwise it will show a message specifying the items unavailability
![buy_item_quantity](https://github.com/thisisalbertocantu/Node.js-MySQL/blob/master/images/buy_item_quantity.png)

Finally, the user can exit the application once he has finished buying.
![exit_application](https://github.com/thisisalbertocantu/Node.js-MySQL/blob/master/images/exit_application.png)
