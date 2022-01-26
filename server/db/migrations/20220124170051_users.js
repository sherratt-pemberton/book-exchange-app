exports.up = (knex, Promise) => {
   return knex.schema.createTable('users', table => {
     table.increments('id').primary()
     table.string('firstName')
     table.string('lastName')
     table.string('email')
     table.binary('hash')
     table.string('street')
     table.string('suburb')
     table.string('city')
     table.string('postCode')
     table.string('region')
     table.string('country')
   })
 }
 
 exports.down = (knex, Promise) => {
   return knex.schema.dropTable('users')
 }
