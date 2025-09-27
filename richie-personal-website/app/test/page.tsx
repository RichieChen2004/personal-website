import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Test! 👋</h1>
      <div>
        <Link href="/">Go to Home Page</Link>
      </div>
    </main>
  );
}
