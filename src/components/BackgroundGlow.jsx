export default function BackgroundGlow() {
  return (
    <>
      <div
        className="
        fixed
        h-96
        rounded-full
        bg-blue-300/30
        blur-[120px]
        pointer-events-none
        "
      />

      <div
        className="
        fixed
        w-96
        h-96
        rounded-full
        bg-purple-300/30
        blur-[120px]
        pointer-events-none
        "
      />
    </>
  );
}