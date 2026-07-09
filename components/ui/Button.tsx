type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className = "" }: ButtonProps) {
  return (
    <button
      className={`bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition font-medium ${className}`}
    >
      {children}
    </button>
  );
}
