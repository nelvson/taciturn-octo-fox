db.ProblemCollection.drop();

db.ProblemCollection.insert({
  title: 'lorem ipsum',
  memory: 64000,
  timelimit: 1,
  description: [
    {
      descriptionText: 'the quick fox',
      descriptionInput: 'jumps over',
      descriptionOutput: 'the lazy dog',
    }
  ],
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

db.ProblemCollection.insert({
  title: 'Flavious Josephus Legend',
  memory: 64000,
  timelimit: 1,
  description: [
    {
    descriptionText: 
    ` The Josephus' problem is known because of the Flavius Josephus' legend, a Jewish historian living in the 1st century. According to Josephus' account of the siege of Yodfat, he and his 40 comrade soldiers were trapped in a cave, the exit of which one was blocked by Romans. They chose suicide over capture and decided that they would form a circle and start killing themselves skipping three in three. Josephus says that, by luck or maybe by the hand of God, he remained the last and gave up to the Romans.” `,
    descriptionInput: `There are NC (1 ≤ NC ≤ 30 ) test cases. In each input test case there will be a pair of positive integer numbers n (1 ≤ n ≤ 10000 ) and k (1 ≤ k ≤ 1000). The number n represents the quantity of people in the circle, numbered from 1 to n. The number k represents the size of step between two men in the circle.

 Follow an example with 5 men and step 2: In this example the remaining element is 3.

 1 2 3 4 5
 1 _2_ 3 4 5
 1 _2_ 3 _4_ 5
 _1_ _2_ 3 _4_ 5
 _1_ _2_ 3 _4_ _5_
    `,
    descriptionOutput: `
  For each test case we will have an output line, presenting in the following format: Case n: m always with a space before n and m.
    `,
    }]
    ,
  sampleIO: [
    {
      input: `3
5 2
6 3
1234 233`,
      output: `Case 1: 3
Case 2: 1
Case 3: 25`,
    },
  ],
  tags: [
    {
      tagName: 'Ad-hoc',
    }
  ]
})

