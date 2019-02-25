db.ProblemCollection.insert({
  title: 'lorem ipsum',
  memory: 64000,
  timelimit: 1,
  description: 'the quick fox jumps over the lazy dog',
  sampleIO: [
    {
      input: 'hello there',
      output: 'general kenobi',
    }
  ],
  tags: [
    {
      tagName: '__development',
    }
  ]
})
