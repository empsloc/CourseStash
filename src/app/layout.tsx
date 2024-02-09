import { ThemeProvider } from "@/components/helpComponents/themeProvider/themeProvider";
import { cn } from "@/lib/utils";
import AuthProvider from "@/providers/AuthProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CourseStash",
  description: "This is just a test application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={cn("relative h-full font-sans antialiased  ", inter.className)}>
     <AuthProvider>
     <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
           
        <main className="relative flex flex-col min-h-screen ">
       
       
        <div className="flex-grow flex-1" >{children} </div>
          
        </main>
        </ThemeProvider>
        </AuthProvider>
        
        </body>
    </html>
  );
}
