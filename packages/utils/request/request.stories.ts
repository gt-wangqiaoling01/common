import type { StoryObj } from '@storybook/vue3';

const meta = {
    title: 'Utils/Request',
    render: (args) => ({
        setup() {
            return { args }
        },
        template: '<div>测试request</div>'
    }),
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};