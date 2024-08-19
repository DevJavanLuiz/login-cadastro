export default function Button({ name, type }) {
  return (
    <button
      className="bg-white hover:shadow-b-shadow hover:text-green-600 rounded mb-5 p-2 w-28 text-green-300"
      type={type}
    >
      {name}
    </button>
  );
}
