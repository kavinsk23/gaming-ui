import { ElementalDamage } from "./ElementalDamage";

const meta: Meta<typeof ElementalDamage> = {
  title: "Atoms/ElementalDamage",
  component: ElementalDamage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    element: {
      control: { type: "select" },
      options: ["earth", "fire", "ice", "kinetic", "life", "lightning"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof ElementalDamage>;

export const Default: Story = {
  args: {
    damage: 451,
    element: "fire",
    size: "md",
  },
};

export const AllElements: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center p-6">
      <div className="grid grid-cols-3 gap-6 items-end">
        <ElementalDamage damage={451} element="earth" />
        <ElementalDamage damage={451} element="fire" />
        <ElementalDamage damage={451} element="ice" />
        <ElementalDamage damage={451} element="kinetic" />
        <ElementalDamage damage={451} element="life" />
        <ElementalDamage damage={451} element="lightning" />
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-center p-6">
      <ElementalDamage damage={451} element="fire" size="sm" />
      <ElementalDamage damage={451} element="fire" size="md" />
      <ElementalDamage damage={451} element="fire" size="lg" />
      <ElementalDamage damage={451} element="fire" size="xl" />
    </div>
  ),
};

export const DifferentDamageValues: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-center p-6">
      <div className="grid grid-cols-2 gap-6">
        <ElementalDamage damage={125} element="lightning" />
        <ElementalDamage damage={342} element="ice" />
        <ElementalDamage damage={789} element="fire" />
        <ElementalDamage damage={56} element="earth" />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <ElementalDamage
        damage={451}
        element="fire"
        onClick={() => console.log("Fire damage clicked!")}
      />
      <ElementalDamage
        damage={451}
        element="ice"
        onClick={() => console.log("Ice damage clicked!")}
      />
    </div>
  ),
};

export const GridLayout: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center p-6">
      <div className="text-lg font-bold text-white mb-4">
        Elemental Damage Grid
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 items-center">
          <ElementalDamage damage={451} element="fire" />
          <ElementalDamage damage={451} element="fire" />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <ElementalDamage damage={451} element="ice" />
          <ElementalDamage damage={451} element="ice" />
        </div>
      </div>
    </div>
  ),
};
