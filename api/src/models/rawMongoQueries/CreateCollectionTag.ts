db.createCollection('TagCollection', {
  validator: {
    $jsonSchema: {
      bsonType: ['array'],
      required: ['tagName'],
      properties: {
        category: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
      },
    },
  },
});
