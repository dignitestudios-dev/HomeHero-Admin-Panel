export const SkeletonPayment = () => {
return (
    <div>
<div className="flex flex-col gap-3 bg-gray-50 p-5 rounded-[15px] animate-pulse">
{[...Array(9)].map((_, i) => (
  <div key={i} className="w-full border-b pb-3">
    <div className="h-4 w-32 bg-gray-300 mb-2 rounded" />
    <div className="h-4 w-full bg-gray-300 rounded" />
  </div>
))}
</div>


<div className="w-full grid grid-cols-2 gap-5 py-6">
{[...Array(2)].map((_, i) => (
  <div key={i} className="bg-gray-50 p-5 rounded-[15px] animate-pulse">
    <div className="h-4 w-32 bg-gray-300 mb-4 rounded" />
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gray-300 rounded-full" />
      <div className="flex flex-col gap-2">
        <div className="h-4 w-32 bg-gray-300 rounded" />
        <div className="h-4 w-40 bg-gray-300 rounded" />
      </div>
    </div>
  </div>
))}
</div>
</div>
);
};
