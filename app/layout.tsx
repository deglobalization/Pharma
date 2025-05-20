import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '한결약국 - 건강기능식품 전문 온라인 몰',
  description: '믿을 수 있는 한결약국에서 건강기능식품을 구매하세요. 환자 맞춤형 건강 솔루션을 제공합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gray-50 font-sans">
        {children}
      </body>
    </html>
  )
} 