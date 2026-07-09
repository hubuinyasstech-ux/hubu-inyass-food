type InputProps = {
  placeholder?: string;
};

export default function Input({ placeholder }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
    />
  );
}
