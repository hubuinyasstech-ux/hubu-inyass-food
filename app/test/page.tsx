"use client";

export default function TestPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <button
        onClick={() => alert("Working!")}
        className="rounded bg-blue-600 px-6 py-3 text-white"
      >
        Test Button
      </button>
    </main>
  );
}
