export const metadata = {
  title: "Soda Sin Co",
  description: "Sinfully Good Dirty Sodas in Vacaville & Dixon, CA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
