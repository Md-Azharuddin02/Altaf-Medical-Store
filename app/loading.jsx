// Route-level skeleton shown during navigation / suspense
export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="container-x pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="skeleton h-7 w-40 rounded-full" />
            <div className="skeleton h-14 w-full" />
            <div className="skeleton h-14 w-4/5" />
            <div className="skeleton h-5 w-full" />
            <div className="skeleton h-5 w-2/3" />
            <div className="mt-4 flex gap-3">
              <div className="skeleton h-12 w-40 rounded-full" />
              <div className="skeleton h-12 w-40 rounded-full" />
            </div>
          </div>
          <div className="skeleton mx-auto aspect-square w-full max-w-md rounded-[2rem]" />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="skeleton h-24 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
