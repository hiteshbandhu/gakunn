'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Loader2, ChevronDown, ChevronUp } from 'lucide-react';

interface ArxivMetadata {
  title: string;
  authors: string[];
  abstract: string;
  categories: string[];
  published: string;
}

interface Presentation {
  title: string;
  slides: Array<{ content: string; imageUrl?: string }>;
}

export default function GeneratePresentationPage() {
  const [arxivLink, setArxivLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [metadata, setMetadata] = useState<ArxivMetadata | null>(null);
  const [presentation, setPresentation] = useState<Presentation | null>(null);
  const [error, setError] = useState('');
  const [showFullAbstract, setShowFullAbstract] = useState(false);
  const router = useRouter();

  const isValidArxivLink = (link: string): boolean => {
    const arxivRegex = /^(?:https?:\/\/(?:www\.)?arxiv\.org\/(?:abs|pdf)\/)?(?:\d{4}\.\d{4,5}|\d{7})(?:v\d+)?$/i;
    return arxivRegex.test(link);
  };

  const normalizeArxivLink = (link: string): string => {
    const arxivRegex = /(?:arxiv\.org\/(?:abs|pdf)\/)?(\d+\.\d+)/i;
    const match = link.match(arxivRegex);

    if (match) {
      return `https://arxiv.org/abs/${match[1]}`;
    }

    return link;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMetadata(null);
    setPresentation(null);

    if (!isValidArxivLink(arxivLink)) {
      setError('Not a valid arXiv link or ID');
      setIsLoading(false);
      return;
    }

    const normalizedLink = normalizeArxivLink(arxivLink);

    try {
      const response = await fetch('/api/v1/getPresentation/getMetadata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ arxivLink: normalizedLink }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch metadata');
      }

      const data = await response.json();
      setMetadata(data);
    } catch (err) {
      setError('An error occurred while fetching the paper metadata. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGeneratePresentation = async () => {
    setIsLoading(true);
    setError('');
    setPresentation(null);

    try {
      const response = await fetch('/api/v1/getPresentation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ arxivLink }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate presentation');
      }

      const data = await response.json();
      setPresentation(data);
    } catch (err) {
      setError('An error occurred while generating the presentation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const truncateAbstract = (abstract: string, limit: number) => {
    if (abstract.length <= limit) return abstract;
    return abstract.slice(0, limit) + '...';
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center p-4 font-shippori">
      <Image
        src="/generate-background.jpg"
        alt="Generate Background"
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
          <h2 className="text-3xl font-bold mt-6">Generate Presentation</h2>
        </header>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter arXiv.org paper link or ID (e.g., 2101.00123)"
              value={arxivLink}
              onChange={(e) => setArxivLink(e.target.value)}
              className="flex-grow bg-white border-2 border-[#2c3e50] px-4 py-2"
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[#2c3e50] text-[#f9f3e6] px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(44,62,80,1)] hover:bg-[#34495e] disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                'Fetch Metadata'
              )}
            </Button>
          </div>
        </form>

        {error && (
          <p className="text-red-600 mb-4">{error}</p>
        )}

        {metadata && (
          <Card className="border-2 border-[#2c3e50] shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] bg-[#f9f3e6] mb-8 overflow-hidden">
            <CardHeader className="bg-[#2c3e50] text-[#f9f3e6]">
              <CardTitle className="text-2xl font-bold">Paper Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">{metadata.title}</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold text-[#2c3e50]">Authors:</p>
                  <p className="text-sm">{metadata.authors.join(', ')}</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2c3e50]">Published:</p>
                  <p className="text-sm">{new Date(metadata.published).toLocaleDateString()}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold text-[#2c3e50]">Categories:</p>
                  <p className="text-sm">{metadata.categories.join(', ')}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-[#2c3e50] mb-2">Abstract:</p>
                <p className="text-sm">
                  {showFullAbstract ? metadata.abstract : truncateAbstract(metadata.abstract, 200)}
                </p>
                {metadata.abstract.length > 200 && (
                  <Button
                    onClick={() => setShowFullAbstract(!showFullAbstract)}
                    variant="link"
                    className="mt-2 p-0 h-auto text-[#d35400] hover:text-[#e67e22]"
                  >
                    {showFullAbstract ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-1" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-1" />
                        Read More
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
            <CardFooter className="bg-[#2c3e50] p-4">
              <Button
                onClick={handleGeneratePresentation}
                disabled={isLoading}
                className="w-full bg-[#d35400] text-[#f9f3e6] px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(211,84,0,0.5)] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(211,84,0,0.5)] hover:bg-[#e67e22] disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  'Generate Presentation'
                )}
              </Button>
            </CardFooter>
          </Card>
        )}

        {presentation && (
          <Card className="border-2 border-[#2c3e50] shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] bg-[#f9f3e6]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{presentation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {presentation.slides.map((slide, index) => (
                <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
                  <p className="mb-2">{slide.content}</p>
                  {slide.imageUrl && (
                    <Image
                      src={slide.imageUrl}
                      alt={`Slide ${index + 1}`}
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        <footer className="mt-8 pt-6 border-t-2 border-[#2c3e50] text-center">
          <p>&copy; 2024 Gakunn. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
