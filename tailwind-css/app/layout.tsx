import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className="bg-white dark:bg-black p-5">{children}</body>
    </html>
  );
}
