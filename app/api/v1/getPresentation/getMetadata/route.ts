import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { parseString } from 'xml2js';
import { promisify } from 'util';

const parseXmlString = promisify(parseString);

interface ArxivMetadata {
  title: string;
  authors: string[];
  abstract: string;
  categories: string[];
  published: string;
}

async function getPaperData(arxivLink: string): Promise<ArxivMetadata> {
  const arxivId = extractArxivId(arxivLink);
  const apiUrl = `http://export.arxiv.org/api/query?id_list=${arxivId}`;

  try {
    const response = await axios.get(apiUrl);
    const result = await parseXmlString(response.data);

    const entry = result.feed.entry[0];
    return {
      title: entry.title[0].trim(),
      authors: entry.author.map((author: any) => author.name[0]),
      abstract: entry.summary[0].trim(),
      categories: entry.category.map((category: any) => category.$.term),
      published: entry.published[0],
    };
  } catch (error) {
    console.error('Error fetching arXiv metadata:', error);
    throw new Error('Failed to fetch paper metadata');
  }
}

function extractArxivId(arxivLink: string): string {
  const match = arxivLink.match(/(?:arxiv\.org\/(?:abs|pdf)\/)?(\d+\.\d+)/i);
  if (!match) {
    throw new Error('Invalid arXiv link');
  }
  return match[1];
}

export async function POST(request: NextRequest) {
  try {
    const { arxivLink } = await request.json();
    if (!arxivLink) {
      return NextResponse.json({ error: 'arXiv link is required' }, { status: 400 });
    }

    const metadata = await getPaperData(arxivLink);
    return NextResponse.json(metadata);
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to fetch paper metadata' }, { status: 500 });
  }
}
