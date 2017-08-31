db.book.insert({
  name: "Introduction to MongoDB", 
  tags: ["mongodb", "nosql", { name: "programming"}, { name: "database"}]
})
db.book.insert({
  name: "AngularJS Advanced", 
  tags: [ "javascript", "frontend", { name: "programming"}]
})
db.book.insert({
  name: "Introduction to NodeJS", 
  tags: ["javascript", "backend", { name: "programming"}] 
})
