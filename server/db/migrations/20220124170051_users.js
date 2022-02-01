exports.up = (knex, Promise) => {
   return knex.schema.createTable('users', table => {
     table.increments('id').primary()
     table.string('firstName')
     table.string('lastName')
     table.string('email')
     table.boolean('isVerified')
     table.binary('passwordHash')
     table.string('city')
     table.string('country')
   })
 }
 
 exports.down = (knex, Promise) => {
   return knex.schema.dropTable('users')
 }
