db.sale.insert({ "item" : "product A", "price" : 10, "quantity" : 2, customer: "A"})
db.sale.insert({ "item" : "product B", "price" : 20, "quantity" : 1 , customer: "A"})
db.sale.insert({ "item" : "product C", "price" : 5, "quantity" : 10, customer: "B" })
db.sale.insert({ "item" : "product B", "price" : 5, "quantity" : 20, customer: "B" })
db.sale.insert({ "item" : "product A", "price" : 10, "quantity" : 10, customer: "C" })

db.product.createIndex({name:1},{unique:true});
db.product.insert({ name : "product A", desc : "description of A"})
db.product.insert({ name : "product B", desc : "description of B"})
