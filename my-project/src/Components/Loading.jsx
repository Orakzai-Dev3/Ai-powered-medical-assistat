export default function Loading() {
  return (
    <div className="flex gap-1 bg-[#E8F2EC]">
      <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" />
    </div>
  );
}