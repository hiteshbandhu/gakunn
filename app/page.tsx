import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="relative min-h-screen flex justify-center items-center p-4 font-shippori">
      <Image
        src="/background.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-30"
      />
      <div className="relative w-full max-w-4xl bg-[#f9f3e6]/90 border-4 border-[#2c3e50] p-8 shadow-lg">
        <header className="mb-8 relative">
          <h1 className="text-4xl font-bold mb-4 tracking-wide flex items-center">
            <span className="mr-2">Gakunn</span>
            <span className="text-5xl text-[#d35400]">学</span>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              {['Pricing', 'Contact'].map((item, index) => (
                <li key={item} className="animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
                  <Link href={`/${item.toLowerCase()}`} className="underline hover:text-[#d35400] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>
          <section className="mb-12 animate-slideIn">
            <h2 className="text-3xl font-bold mb-4">Bring Your Research to Life</h2>
            <p className="mb-6">Transform complex findings into clear, compelling visual narratives that captivate your audience.</p>
            <Button
              className="bg-[#2c3e50] text-[#f9f3e6] px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(44,62,80,1)] hover:bg-[#34495e]"
              asChild
            >
              <Link href="/generate">Begin Your Project</Link>
            </Button>
          </section>

          <section id="features" className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Useful Tools for Your Presentation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Key Point Finder", description: "Helps you spot and pull out important ideas from your research papers." },
                { title: "Slide Designs", description: "Pick from ready-made slide layouts you can adjust to fit your needs." },
                { title: "Reference Helper", description: "Keeps your sources organized and properly formatted for academic writing." }
              ].map((feature, index) => (
                <Card key={index} className="border-2 border-[#2c3e50] shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(44,62,80,1)] bg-[#f9f3e6] animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-12 pt-6 border-t-2 border-[#2c3e50]">
          <p className="text-center">&copy; 2024 Gakunn. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}