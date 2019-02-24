db.createCollection('ProblemCollection', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['title','memory','timelimit','description', 'sampleIO'],
      properties: {
       title: {
         bsonType: 'string',
         description: 'must be a string and is required',
       },
        memory: {
          bsonType: 'int',
          description: 'must be a string and is required',
        },
        timelimit: {
          bsonType: 'int',
          description: 'must be a string and is required',
          
        },
        description: {
          bsonType: 'string',
          description: 'must be a string and is required',
          
        },
        sampleIO: {
          bsonType: 'string',
          description: 'must be a string and is required',
          
        },
      }
    }
  }
})
