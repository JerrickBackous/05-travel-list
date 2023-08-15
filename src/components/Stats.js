
export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>
          Start adding some items to your packing list!
        </em>
      </p>
    );

  const total = items.length;

  const packed = items.filter((items) => items.packed === true).length;

  const percent = Math.round((packed / total) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100 ? 'You got everything ready to go' :
          `You have ${total} items in your list and you already packed ${packed} (${percent}%)`}
      </em>
    </footer>
  );
}
