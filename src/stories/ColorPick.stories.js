import ColorPick from './ColorPick.vue';

export default {
  title: 'Example/ColorPick',
  component: ColorPick,
};

const Template = (args, { argTypes }) => ({
  components: { ColorPick },
  template: '<colorPick />',
});

export const Primary = Template.bind({});
