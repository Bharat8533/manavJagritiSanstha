import { Edit2, Trash2 } from "lucide-react";

const defaultImage = () => {
  const image =
    "https://i.pinimg.com/1200x/dc/36/8e/dc368ebc1f57f7fec8910e3b03615944.jpg";
  return image;
};

export default function BannerCard({ banner, onEdit, onDelete }: any) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-[#1E0F0A]/10 shadow-sm group">
      <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
        <img
          src={banner.imageUrl || defaultImage()}
          alt={banner.page}
          className="w-full h-full object-cover z-0"
          onError={(e: any) => (e.target.src = defaultImage())}
        />
        <div className="absolute bottom-2 bg-white/80 px-2 py-0.5 rounded text-[10px] font-bold z-10 bg-linear-to-r from-red-50 to-[#1E0F0A] text-white">
          {banner.page.toUpperCase()}
        </div>
      </div>
      <div className="flex justify-between items-center mb-2 gap-2">
        <button
          onClick={() => onEdit(banner)}
          className="w-full p-2 bg-blue-50 hover:bg-blue-200 text-sm text-blue-600 rounded-lg cursor-pointer text-center"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(banner.id)}
          className="w-full p-2 bg-red-50 hover:bg-red-200 text-red-600 text-sm rounded-lg cursor-pointer text-center"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
