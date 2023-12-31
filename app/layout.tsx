import "@/styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-w-screen min-h-screen bg-gradient-to-br from-orange-400 to-cyan-500 flex items-center justify-center font-sans overflow-hidden">
        <div
          className="glassmorphism-container"
          style={{ width: "700px", minWidth: "700px" }}
        >
          {children}
          <Link
            href={"/"}
            className="w-8 h-8 p-1 absolute top-1 right-1 text-gray-100 border border-gray-100 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </div>
      </body>
    </html>
  );
}
