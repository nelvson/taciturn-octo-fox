export default {
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    memory: {
      type: 'json',
    },
    timelimit: {
      type: 'json',
    },
    description: {
      type: 'string',
      required: true,
    },
    sampleIO: {
      type: 'json',
      required: true,
    },
  },
};
