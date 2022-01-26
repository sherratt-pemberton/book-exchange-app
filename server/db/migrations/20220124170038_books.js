exports.up = (knex, Promise) => {
   return knex.schema.createTable('books', table => {
     table.increments('id').primary()
     table.string('title')
     table.string('author')
     table.integer('category')
     table.integer('owner').references('users.id')
     table.boolean('avalable')
   })
 }
 
 exports.down = (knex, Promise) => {
   return knex.schema.dropTable('books')
 }