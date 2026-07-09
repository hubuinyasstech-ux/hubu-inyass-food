type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
      {text}
    </span>
  );
}
