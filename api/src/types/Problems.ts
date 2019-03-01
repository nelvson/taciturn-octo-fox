import {Tags} from '.';

export type problemDescription = {
  descriptionText: 'string';
  descriptionInput: 'string';
  descriptionOutput: 'string';
};

export type sampleIODescription = {
  input: 'string';
  output: 'string';
};

export type Problems = {
  title: 'string';
  memory: 'number';
  timelimit: 'number';
  description: Array<problemDescription>;
  sampleIO: Array<sampleIODescription>;
  tags: Array<Tags>;
};
