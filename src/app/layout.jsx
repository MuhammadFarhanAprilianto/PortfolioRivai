import './globals.css';

export const metadata = {
  title: 'Muhamad Rivai - Portfolio | Visual Communication Designer & QC Specialist',
  description: 'Portofolio Resmi Muhamad Rivai - S1 Desain Komunikasi Visual Unindra, Quality Control Specialist, BNSP Welder 3G SMAW & 3G GMAW, & Retail Operations Leader',
  keywords: 'Muhamad Rivai, Portofolio, Desain Komunikasi Visual, DKV, Quality Control, Welder 3G SMAW, Welder 3G GMAW, Kimia Farma, Pstore',
  icons: {
    icon: [
      { url: '/assets/Logo Web.webp', type: 'image/webp' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/assets/Logo Web.webp',
    apple: '/assets/Logo Web.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth bg-black">
      <head>
        <link rel="icon" href="/assets/Logo Web.webp" type="image/webp" />
        <link rel="shortcut icon" href="/assets/Logo Web.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/assets/Logo Web.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/agrandir"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black bg-dot-grid min-h-screen text-white antialiased selection:bg-[#a6f30d] selection:text-black">
        {children}
      </body>
    </html>
  );
}
