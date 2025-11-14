import { PanelBgLight } from './PanelBgLight';

const meta: Meta<typeof PanelBgLight> = {
  title: 'Components/PanelBgLight',
  component: PanelBgLight,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full', 'auto'],
    },
    height: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full', 'auto'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof PanelBgLight>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-6 text-gray-800">
        <h3 className="text-lg font-bold">Light Panel Content</h3>
        <p className="mt-2">This is the content inside the light panel background.</p>
      </div>
    ),
    width: 'md',
    height: 'md',
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <PanelBgLight width="sm" height="sm">
        <div className="p-4 text-gray-800 text-sm">Small Light Panel</div>
      </PanelBgLight>
      <PanelBgLight width="md" height="md">
        <div className="p-6 text-gray-800">Medium Light Panel</div>
      </PanelBgLight>
      <PanelBgLight width="lg" height="lg">
        <div className="p-8 text-gray-800 text-lg">Large Light Panel</div>
      </PanelBgLight>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <PanelBgLight width="md" height="auto">
      <div className="p-6 text-gray-800">
        <h3 className="text-xl font-bold mb-4">Game Stats</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Health:</span>
            <span className="text-green-600">100%</span>
          </div>
          <div className="flex justify-between">
            <span>Mana:</span>
            <span className="text-blue-600">75%</span>
          </div>
          <div className="flex justify-between">
            <span>Stamina:</span>
            <span className="text-yellow-600">50%</span>
          </div>
        </div>
      </div>
    </PanelBgLight>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <PanelBgLight width="full" height="auto">
        <div className="p-6 text-gray-800">
          <h3 className="text-lg font-bold">Full Width Light Panel</h3>
          <p className="mt-2">This light panel stretches to fill its container width.</p>
        </div>
      </PanelBgLight>
    </div>
  ),
};

export const CustomBackground: Story = {
  args: {
    backgroundImage: '/custom-light-bg.svg', // Replace with your actual light SVG path
    children: (
      <div className="p-6 text-gray-800">
        <h3 className="text-lg font-bold">Custom Light Background</h3>
        <p>Using a custom light background image.</p>
      </div>
    ),
    width: 'md',
    height: 'md',
  },
};

export const Interactive: Story = {
  render: () => (
    <PanelBgLight 
      width="md" 
      height="md"
      onClick={() => console.log('Light panel clicked!')}
    >
      <div className="p-6 text-gray-800 text-center">
        <h3 className="text-lg font-bold">Clickable Light Panel</h3>
        <p className="mt-2">Click me!</p>
      </div>
    </PanelBgLight>
  ),
};