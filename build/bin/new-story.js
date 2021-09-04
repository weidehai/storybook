/* eslint-disable no-console,@typescript-eslint/no-var-requires */
const path = require('path');
const fsPromises = require('fs/promises');

console.log(process.argv);
const PATH = path.resolve(__dirname, '../../src/stories');
if (!process.argv[2]) {
  console.error('error:must input story name');
}
const storyName = process.argv[2];
const VUETEMP = `<template>
  <div name="container">1111</div>
</template>

<script lang="ts">
import Vue from 'vue';
import './${storyName}.scss';

export default Vue.extend({
  name: '${storyName}',
});
</script>
`;
const JSTEMP = `import ${storyName} from './${storyName}.vue';

export default {
  title: 'Example/${storyName}',
  component: ${storyName},
};

const Template = (args, { argTypes }) => ({
  components: { ${storyName} },
  template: '<${storyName}/>',
});

export const Primary = Template.bind({});`;

async function createFile(filePath) {
  const fileHandle = await fsPromises.open(filePath, 'w');
  return fileHandle;
}

async function writeFile(fd, content) {
  await fd.write(content);
  await fd.close();
}

async function newStory() {
  writeFile(await createFile(path.resolve(PATH, `${storyName}.scss`)), '');
  writeFile(await createFile(path.resolve(PATH, `${storyName}.vue`)), VUETEMP);
  writeFile(await createFile(path.resolve(PATH, `${storyName}.stories.js`)), JSTEMP);
}

newStory();
