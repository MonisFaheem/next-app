import Image from "next/image";
import Link from "next/link";

export default function BrowseByCategory() {
const categories = [
  {
    id: 1,
    title: "Agriculture",
    logo: "/icons/category1.svg", 
    jobs: 1254,
  },
  {
    id: 2,
    title: "Metal Production",
    logo: "/icons/category2.svg",
    jobs: 816,
  },
  {
    id: 3,
    title: "Commerce",
    logo: "/icons/category4.svg",
    jobs: 2082,
  },
  {
    id: 4,
    title: "Construction",
    logo: "/icons/category3.svg",
    jobs: 1520,
  },
  {
    id: 5,
    title: "Hotels & Tourism",
    logo: "/icons/category5.svg",
    jobs: 1022,
  },
  {
    id: 6,
    title: "Education",
    logo: "/icons/category6.svg",
    jobs: 1496,
  },
  {
    id: 7,
    title: "Financial Services",
    logo: "/icons/category8.svg",
    jobs: 1529,
  },
  {
    id: 8,
    title: "Transport",
    logo: "/icons/category7.svg",
    jobs: 1244,
  },
];

  return (
      <div className="py-12 w-screen relative left-[50%] right-[50%] -mx-[50vw]">
      <div className="max-w-7xl mx-auto px-4">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  w-full">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="bg-white rounded-2xl p-8 min-h-[250px] shadow-md flex flex-col items-center justify-center hover:shadow-lg transition w-full"
          >
            {/* Icon */}
            <div className="w-12 h-12 mb-4 relative">
              <Image
                src={cat.logo}
                alt={cat.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-black mb-2 text-center">{cat.title}</h3>

            {/* Job Count */}
            <span className="bg-[#E6F2F0] text-teal-700 text-sm px-3 py-1 rounded-full">
              {cat.jobs} jobs
            </span>
          </button>
        ))}
      </div>
      </div>
    </div>
  );
}
