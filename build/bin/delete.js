/* eslint-disable no-console,@typescript-eslint/no-var-requires */
const path = require('path');
const fsPromises = require('fs/promises');

const PATH = path.resolve(__dirname, '../../src/stories');
if (!process.argv[2]) {
  console.error('error:must input story name');
}
const storyName = process.argv[2];

async function deleteStory() {
  await fsPromises.rm(path.resolve(PATH, `${storyName}.scss`), { force: true });
  await fsPromises.rm(path.resolve(PATH, `${storyName}.vue`), { force: true });
  await fsPromises.rm(path.resolve(PATH, `${storyName}.stories.js`), { force: true });
}

deleteStory();
