function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className='bg-four text-slate-700 font-bold py-2 px-4 rounded-md shadow-md group hover:scale-105 transition-all duration-200'
    >
      {label}
    </button>
  );
}

export default Button;
