type Props = {
  item: {
    name: string;
    quantity: number;
  };
};

const MenuItem = ({ item }: Props) => {
  return (
    <div className="flex justify-between items-center p-2 text-xl">
      <h2>{item.name}</h2>
      <span>{item.quantity}</span>
    </div>
  );
};

export default MenuItem;
