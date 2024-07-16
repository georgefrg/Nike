export default function MyButton({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) {
  return (
    <button
      className={`flex items-center justify-center gap-2 py-4 text-lg leading-none px-7 font-montserrat rounded-full ${fullWidth && "w-full"}  border ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } ${textColor ? textColor : "text-white"} ${
        borderColor ? borderColor : "border-coral-red"
      }`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="icon" className="w-5 h-5 ml-2 rounded-full" />
      )}
    </button>
  );
}
