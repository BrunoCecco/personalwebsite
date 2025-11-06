import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata = {
  title: 'Bruno Ceccolini',
  description: 'Bruno Ceccolini - Software Engineer',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

