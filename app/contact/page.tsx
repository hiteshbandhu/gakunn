import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex justify-center items-center p-4 font-shippori">
      <Image
        src="/contact-background.jpg"
        alt="Contact Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-30"
      />
      <div className="relative w-full max-w-4xl bg-[#f9f3e6]/90 border-4 border-[#2c3e50] p-8 shadow-lg">
        <header className="mb-8 relative">
          <Link href="/" className="text-4xl font-bold mb-4 tracking-wide flex items-center">
            <span className="mr-2">Gakunn</span>
            <span className="text-5xl text-[#d35400]">学</span>
          </Link>
          <h1 className="text-3xl font-bold mt-6">Contact Us</h1>
        </header>

        <main>
          <Card className="border-2 border-[#2c3e50] shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(44,62,80,1)] bg-[#f9f3e6]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Hitesh Bandhu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:bandhuhitesh52003@gmail.com" className="underline hover:text-[#d35400] transition-colors duration-300">bandhuhitesh52003@gmail.com</a>
              </p>
              <p className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <a href="https://x.com/_hiteshbandhu" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#d35400] transition-colors duration-300">@hiteshbandhu</a>
              </p>
            </CardContent>
          </Card>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">Have questions about Gakunn? We're here to help! Feel free to reach out using the contact information above.</p>
            <Button className="bg-[#2c3e50] text-[#f9f3e6] px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(44,62,80,1)] hover:bg-[#34495e]">
              Send a Message
            </Button>
          </section>
        </main>

        <footer className="mt-12 pt-6 border-t-2 border-[#2c3e50]">
          <p className="text-center">&copy; 2024 Gakunn. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
