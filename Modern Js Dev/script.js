// ************************** NAMED IMPORT ***********************************
// Importing modules

// Import modules are hoisted. It always executed first.
// Named import
import { addToCart } from './shoppingCart.js';
// We can import multiple function and variable
import { totalPrice, totalQuantity } from './shoppingCart.js';
// we can import other in other way
import { productName as product, quantities as piece } from './shoppingCart.js';

// Import everything at once.
import * as ShoppingCart from './shoppingCart.js';

// way of use above import .
ShoppingCart.addToCart('Burger', 5);

console.log('Import modules');

// this function is not work. first go to the module and put "export" keyword before the function name.
addToCart(product, piece);
addToCart('Pasta', 2);

console.log(totalPrice, totalQuantity);

// *************************** DEFAULT IMPORT *********************

import greetings from './shoppingCart.js';

greetings('Mahatab');

// console.log(cart)

// we can do both name and default import at once.

// import greeting, { totalPrice, totalQuantity } from './shoppingCart.js';


//******* MIXED IMPORT ***** */

// we can import both name and default at once 
import wishList, { addWishLists } from './shoppingCart.js';

wishList('Refrigarator');
wishList('Speaker');
wishList('Car');

console.log(addWishLists);



// **************** BUNDLE AND BUILD FILE USING "NPM" and "PARCEL" ********************

// Use ("-g") for global installation.
// 1) npm init -> Create package.json file.
// 2) npm i parcel -> add development dependency(--save-dev). OR
      // npm i parcel-bundler.
// 3) npm uninstall parcel -> Uninstall parcel.

//--------BUILD FILE USING npx ---------
// 1) npx parcel "file-name" -> it bundles all file that inclues in specified file
// 2) npx parcel build "file-name" -> It will run build process.
// 3) 


// **************** CONVERT ES6 FILE INTO ES5 USING BABEL *********************************


