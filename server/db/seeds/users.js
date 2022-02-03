
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, firstName: 'rowValue1', lastName: 'rowValue1', email: 'rowValue1',isVerified: '0',passwordHash: '',city: '',country: ''},
        {id: 2, firstName: 'rowValue2', lastName: 'rowValue2', email: 'rowValue2',isVerified: '0',passwordHash: '',city: '',country: ''},
        {id: 3, firstName: 'rowValue3', lastName: 'rowValue3', email: 'rowValue3',isVerified: '0',passwordHash: '',city: '',country: ''},
        {id: 4, firstName: 'rowValue2', lastName: 'rowValue2', email: 'rowValue2',isVerified: '0',passwordHash: '',city: '',country: ''},
        {id: 5, firstName: 'rowValue3', lastName: 'rowValue3', email: 'rowValue3',isVerified: '0',passwordHash: '',city: '',country: ''}
      ]);
    });
};
