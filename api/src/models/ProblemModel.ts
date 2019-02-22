export default {
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'number',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    memory: ['32MB', '64MB', '128MB'],
    timelimit: ['0.5s', '1s', '2s'],
    description: {
      type: 'string',
      required: true,
    },
  },
};
