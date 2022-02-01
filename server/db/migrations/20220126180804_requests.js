exports.up = (knex, Promise) => {
   return knex.schema.createTable('requests', table => {
     table.increments('id').primary()
     table.integer('bookId').references('books.id')
     table.integer('requester').references('users.id')
     table.integer('recipient').references('users.id')
     table.string('dateRequested')
     table.boolean('accepted')     
   })
 }
 
 exports.down = (knex, Promise) => {
   return knex.schema.dropTable('requests')
 }