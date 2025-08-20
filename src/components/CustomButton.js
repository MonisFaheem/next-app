export default function CustomButton({ title, onClick,icon, className}) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors px-5 py-2 font-medium`}
    >
      
      {icon && <span>{icon}</span>}
      {title}
    </button>
  );
}