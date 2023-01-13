"use client";

function ModeToggle() {
  return (
    <button
      type="button"
      className="mt-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={() => {
        document.documentElement.classList.contains("dark")
          ? document.documentElement.classList.remove("dark")
          : document.documentElement.classList.add("dark");
      }}
    >
      Toggle Mode
    </button>
  );
}

export default ModeToggle;
