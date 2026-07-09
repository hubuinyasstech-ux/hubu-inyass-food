import Image from "next/image";

type CategoryCardProps = {
  name: string;
  image: string;
  count: number;
};

export default function CategoryCard({
  name,
  image,
  count,
}: CategoryCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, 300px"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">{count} items</p>
      </div>
    </div>
  );
}
