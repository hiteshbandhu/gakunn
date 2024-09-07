import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Gakunn - AI-Powered Academic Presentation Generator';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f9f3e6 0%, #f1e5c4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          border: '12px solid #2c3e50',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(211,84,0,0.1) 0%, rgba(211,84,0,0) 70%)',
            zIndex: 1,
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 130,
            fontWeight: 800,
            color: '#2c3e50',
            letterSpacing: '-0.05em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            zIndex: 1,
          }}
        >
          Gakunn
          <span style={{ fontSize: 150, color: '#d35400', marginLeft: 20, textShadow: '2px 2px 4px rgba(211,84,0,0.3)' }}>学</span>
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: '#34495e',
            marginTop: 40,
            textAlign: 'center',
            maxWidth: '80%',
            lineHeight: 1.2,
            zIndex: 1,
          }}
        >
          AI-Powered Academic Presentation Generator
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#7f8c8d',
            marginTop: 30,
            textAlign: 'center',
            maxWidth: '70%',
            lineHeight: 1.4,
            zIndex: 1,
          }}
        >
          Transform arXiv papers into engaging presentations with ease
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
