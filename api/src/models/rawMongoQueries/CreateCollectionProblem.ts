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
          bsonType: 'number',
          description: 'must be a string and is required',
        },
        timelimit: {
          bsonType: 'number',
          description: 'must be a string and is required',
          
        },
        description: {
          bsonType: ['array'],
          minItems: 1,
          required: ['descriptionText', 'descriptionInput', 'descriptionOutput'],
          properties: {
            descriptionText: {
              bsonType: 'string',
              description: 'must be a sring and is required',
            },
            descriptionInput: {
              bsonType: 'string',
              description: 'must be a string and is required',
            },
            descriptionOutput: {
              bsonType: 'string',
              description: 'must be a string and is required',
            },
          }
        },
        sampleIO: {
          bsonType: ['array'],
          minItems: 1,
          required: ['input', 'output'],
          properties: {
            input: {
              bsonType: 'string',
              description: 'must be a string and is required',
            },
            output: {
              bsonType: 'string',
              description: 'must be a string and is required',
            },
          },
        },
        tags: {
          bsonType: ['array'],
          minItems: 1,
          required: ['tagName'],
          properties: {
            tagName: {
              bsonType: 'string',
              description: 'must be a string and is required',
            }
          }
        }
      }
    }
  }
})
