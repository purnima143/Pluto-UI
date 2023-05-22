import  Button  from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Buttons',
  component: Button,
  tags: ['autodocs'],
  argTypes: { size: { control: 'radio', options: ['small', 'medium', 'large'] },
  onClick: { action: 'clicked' }}
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};
export const Success = {
  args: {
    variant: 'success',
    children: 'Button',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Button',
  },
};export const Warning = {
  args: {
    variant: 'warning',
    children: 'Button',
  },
};

export const Dark = {
  args: {
    variant: 'dark',
    children: 'Button',
  },
};export const Light = {
  args: {
    variant: 'light',
    children: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Button',

  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Button',
  },
};
export const Disabled = {
  args: {
    variant: 'primary',
    children: 'Button',
    disabled:true
  },
};

