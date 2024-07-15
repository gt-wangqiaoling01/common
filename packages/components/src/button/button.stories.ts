import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './button.vue';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    render: (args: any) => ({
        components: { Button },
        setup() {
          return { args };
        },
        template: '<Button>测试button</Button>',
    }),
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};