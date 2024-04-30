export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div
        className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(255,255,255,0.4)]"
        aria-label="読み込み中"
      >
        <div className="text-center text-xl font-bold text-foreground">
          Loading...
        </div>
      </div>
    </>
  );
}
