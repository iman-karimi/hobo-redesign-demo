import "./globals.css";

export const metadata = {
  title: "HOBO Computer Services | Redesign Concept",
  description: "Unofficial redesign concept for a Markham IT support business."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
