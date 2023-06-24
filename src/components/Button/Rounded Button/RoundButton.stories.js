import  Button  from './RoundButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Buttons/Round \Buttons',
  component: Button,
  tags: ['autodocs'],
  argTypes: { size: { control: 'radio', options: ['small', 'medium', 'large'] },
  onClick: { action: 'clicked' }}
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Round = {
  args: {
    variant: 'rounded',
    children: 'Button'
  }
}

export const RoundSecondary = {
  args: {
    variant: 'roundblue',
    children: 'Button',
  }
}

export const RoundWarning = {
  args: {
    variant: 'roundyellow',
    children: 'Button',
  }
}

export const RoundDanger = {
  args: {
    variant: 'rounddanger',
    children: 'Button',
  }
}

export const RoundDark = {
  args: {
    variant: 'rounddark',
    children: 'Button',
  }
}

export const RoundLight = {
  args: {
    variant: 'roundlight',
    children: 'Button',
  }
}

export const RoundSuccess = {
  args: {
    variant: 'roundsuccess',
    children: 'Button',
  },
};

export const RoundLarge = {
  args: {
    size: 'roundlarge',
    children: 'Button',

  },
};

export const RoundSmall = {
  args: {
    size: 'roundsmall',
    children: 'Button',
  },
};

export const RoundMedium = {
  args: {
    size: 'roundmedium',
    children: 'Button',
  },
};

export const RoundDisabled = {
  args: {
    variant: 'roundprimary',
    children: 'Button',
    disabled:true
  },
};