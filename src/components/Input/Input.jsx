export default function Input({ type, placeholder, icon, name, id }) {
  return (
    <>
      <label
        htmlFor={id}
        className="cursor-pointer text-green-500/90 mb-2 text-lg flex items-center"
      >
        <span className="mr-4">{icon} </span> <p>{name} </p>
      </label>
      <input
        id={id}
        className="focus:outline-none rounded-md cursor-pointer focus:shadow-b-shadow  border-solid relative border-r-4 focus:border-green-400/90 border-green-400/20 mb-7 p-2 placeholder-teal-600/30 text-teal-600/50"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}
