import Header from "./Header";

// Mock icons - replace these with your actual icon paths
const mockIcons = {
  icon1:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E",
  icon2:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Crect x='2' y='2' width='20' height='20' rx='4'/%3E%3C/svg%3E",
  icon3:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpolygon points='12,2 22,22 2,22'/%3E%3C/svg%3E",
};

const meta: Meta<typeof Header> = {
  title: "Molecules/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    onBackClick: { action: "back clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    resources: {
      resource1: 150,
      resource2: 75,
      resource3: 300,
    },
    onBackClick: () => console.log("Back button clicked"),
  },
};

export const EmptyResources: Story = {
  args: {
    resources: {
      resource1: 0,
      resource2: 0,
      resource3: 0,
    },
    onBackClick: () => console.log("Back button clicked"),
  },
};

export const MaxResources: Story = {
  args: {
    resources: {
      resource1: 999,
      resource2: 999,
      resource3: 999,
    },
    onBackClick: () => console.log("Back button clicked"),
  },
};

// Show multiple headers in different states
export const AllVariants: Story = {
  render: () => (
    <div className="p-4 space-y-4 bg-gray-900">
      <div>
        <h3 className="mb-2 text-white">Default</h3>
        <Header
          resources={{ resource1: 150, resource2: 75, resource3: 300 }}
          onBackClick={() => console.log("Back clicked")}
        />
      </div>
      <div>
        <h3 className="mb-2 text-white">Low Resources</h3>
        <Header
          resources={{ resource1: 5, resource2: 3, resource3: 1 }}
          onBackClick={() => console.log("Back clicked")}
        />
      </div>
      <div>
        <h3 className="mb-2 text-white">High Resources</h3>
        <Header
          resources={{ resource1: 999, resource2: 888, resource3: 777 }}
          onBackClick={() => console.log("Back clicked")}
        />
      </div>
    </div>
  ),
};
