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
    },
  ],
  sampleIO: [
    {
      input: 'hello there',
      output: 'general kenobi',
    },
  ],
  tags: [
    {
      tagName: '__development',
    },
  ],
});

db.ProblemCollection.insert({
  title: 'Flavious Josephus Legend',
  memory: 64000,
  timelimit: 1,
  description: [
    {
      descriptionText:
        " The Josephus' problem is known because of the Flavius Josephus' legend, a Jewish historian living in the 1st century. According to Josephus' account of the siege of Yodfat, he and his 40 comrade soldiers were trapped in a cave, the exit of which one was blocked by Romans. They chose suicide over capture and decided that they would form a circle and start killing themselves skipping three in three. Josephus says that, by luck or maybe by the hand of God, he remained the last and gave up to the Romans.” ",
      descriptionInput:
        'There are NC (1 ≤ NC ≤ 30 ) test cases. In each input test case there will be a pair of positive integer numbers n (1 ≤ n ≤ 10000 ) and k (1 ≤ k ≤ 1000). The number n represents the quantity of people in the circle, numbered from 1 to n. The number k represents the size of step between two men in the circle.' +
        'Follow an example with 5 men and step 2: In this example the remaining element is 3.\n' +
        '1 2 3 4 5\n' +
        '1 _2_ 3 4 5\n' +
        '1 _2_ 3 _4_ 5\n' +
        '_1_ _2_ 3 _4_ 5\n' +
        '_1_ _2_ 3 _4_ _5_',
      descriptionOutput:
        'For each test case we will have an output line, presenting in the following format: Case n: m always with a space before n and m.',
    },
  ],
  sampleIO: [
    {
      input: '3\n' + '5 2\n' + '6 3\n' + '1234 233\n',
      output: 'Case 1: 3\n' + 'Case 2: 1\n' + 'Case 3: 25\n',
    },
  ],
  tags: [
    {
      tagName: 'Ad-hoc',
    },
  ],
});

db.ProblemCollection.insert({
  title: 'Letter Range',
  memory: 64000,
  timelimit: 1,
  description: [
    {
      descriptionText:
        "A letter range is a set of alphabetically consecutive letters taken from the lowercase alphabetic characters 'a' through 'z'. The lowest and highest letters of the range, separated by a colon (the character ':'), are used to represent a letter range. For example, the range \"a:c\" represents the consecutive letters 'a', 'b', and 'c'. (quotes are not part of the range). The range \"w:z\" represents the letters 'w', 'x', 'y', and 'z'. The range \"m:m\" respresents the single letter 'm'. ",
      descriptionInput:
        'Each line of input is one test case. Every test case contains one string, that can be empty and which letters may not be in alphabetical order, of lowercase letters (a-z) and spaces\n' +
        'The string will contain between 0 and 50 characters, inclusive.',
      descriptionOutput:
        'For each test case in the input, your program must print the letter ranges ordered alphabetically by the low value of each range. Letter ranges contained in the result must represent the largest possible sequences of increasing consecutive letters found in the input text. Ignore space characters and duplicate letters contained in the input.\n\n' +
        'If the string is empty just print a new line.\n\n' +
        'For example, the string "fb xee ac" has three letter ranges, "a:c" (the letters a, b, and c), "e:f" (the letters e and f) and "x:x" (the letter x). Please refer to the examples.\n',
    },
  ],
  sampleIO: [
    {
      input: `aha
xyzzy
quick brown fox jumps over the lazy dog
fbxeac
  x
 b z a x c y
bdfhjlnprtvxz

az def`,
      output:
        'a:a, h:h\n' +
        'x:z\n' +
        'a:z\n' +
        'a:c, e:f, x:x\n' +
        'x:x\n' +
        'a:c, x:z\n' +
        'b:b, d:d, f:f, h:h, j:j, l:l, n:n, p:p, r:r, t:t, v:v, x:x, z:z\n' +
        '\n' +
        'a:a, d:f, z:z\n',
    },
  ],
  tags: [
    {
      tagName: 'Strings',
    },
    {
      tagName: 'Ad-hoc',
    },
  ],
});
