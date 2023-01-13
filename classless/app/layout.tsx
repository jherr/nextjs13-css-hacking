import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/awsm.css/dist/awsm.min.css"
        />
        <link
          id="theme"
          rel="stylesheet"
          href="https://unpkg.com/awsm.css/dist/awsm_theme_pearl-lusta.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
