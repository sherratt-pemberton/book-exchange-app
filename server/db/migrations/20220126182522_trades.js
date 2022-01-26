exports.up = (knex, Promise) => {
   return knex.schema.createTable('trades', table => {
     table.increments('id').primary()
     table.integer('bookIdA').references('books.id')
     table.integer('bookIdB').references('books.id')
     table.integer('requester').references('users.id')
     table.integer('recipient').references('users.id')
     table.string('dateAccepted')
   })
 }
 
 exports.down = (knex, Promise) => {
   return knex.schema.dropTable('trades')
 }