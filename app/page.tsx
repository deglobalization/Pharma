'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { FiChevronRight, FiShield, FiTruck, FiCreditCard, FiPhoneCall } from 'react-icons/fi';

// 샘플 제품 데이터
const featuredProducts = [
  {
    id: '1',
    title: '프리미엄 종합 비타민 미네랄',
    price: 35000,
    image: '/Pharma/images/product1.jpg',
    category: '비타민/미네랄',
    isBestSeller: true,
  },
  {
    id: '2',
    title: '고함량 오메가3 1100',
    price: 48000,
    salePrice: 39800,
    image: '/Pharma/images/product2.jpg',
    category: '오메가/루테인',
    isOnSale: true,
  },
  {
    id: '3',
    title: '프로바이오틱스 생유산균',
    price: 32000,
    image: '/Pharma/images/product3.jpg',
    category: '프로바이오틱스',
  },
  {
    id: '4',
    title: '프리미엄 루테인 지아잔틴',
    price: 29000,
    image: '/Pharma/images/product4.jpg',
    category: '눈 건강',
  },
  {
    id: '5',
    title: '칼슘 마그네슘 비타민D',
    price: 27000,
    image: '/Pharma/images/product5.jpg',
    category: '뼈 건강',
  },
  {
    id: '6',
    title: '관절 건강 콘드로이친',
    price: 45000,
    image: '/Pharma/images/product6.jpg',
    category: '관절/연골',
    isNew: true,
  },
  {
    id: '7',
    title: '유기농 스피루리나',
    price: 38000,
    image: '/Pharma/images/product7.jpg',
    category: '슈퍼푸드',
  },
  {
    id: '8',
    title: '비타민C 1000',
    price: 22000,
    image: '/Pharma/images/product8.jpg',
    category: '면역 건강',
    isOnSale: true,
    salePrice: 18000,
  }
];

// 카테고리 데이터
const categories = [
  { id: 'vitamins', name: '비타민/미네랄', count: 32 },
  { id: 'omega', name: '오메가/루테인', count: 24 },
  { id: 'probiotics', name: '프로바이오틱스', count: 18 },
  { id: 'joint', name: '관절/연골', count: 15 },
  { id: 'immunity', name: '면역 건강', count: 22 },
  { id: 'digestion', name: '소화 건강', count: 14 },
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* 히어로 섹션 */}
      <section className="relative bg-primary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                건강한 삶을 위한 <br />
                한결약국 건강기능식품
              </h1>
              <p className="text-primary-100 text-lg md:text-xl mb-8">
                약사의 전문적인 지식으로 엄선한 건강기능식품으로<br />
                일상의 건강을, 한결같이 지켜드립니다.
              </p>
              <div className="flex space-x-4">
                <Link href="/products" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
                  제품 보기
                </Link>
                <Link href="/consultation" className="btn-primary bg-transparent border border-white hover:bg-primary-600">
                  건강 상담
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-64 md:h-96">
              <div className="relative h-full w-full">
                <Image 
                  src="/Pharma/images/hero.jpg"
                  alt="한결약국 건강기능식품"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <FiShield className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">품질 보증</h3>
              <p className="text-gray-600">철저한 품질 관리와 검수를 통해 안전한 제품만을 제공합니다.</p>
            </div>
            <div className="text-center p-6 rounded-lg transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <FiTruck className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">당일 배송</h3>
              <p className="text-gray-600">오후 3시 이전 주문 시 당일 출고, 신선하게 배송해 드립니다.</p>
            </div>
            <div className="text-center p-6 rounded-lg transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <FiPhoneCall className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">약사 상담</h3>
              <p className="text-gray-600">전문 약사가 1:1 맞춤형 건강 상담을 제공합니다.</p>
            </div>
            <div className="text-center p-6 rounded-lg transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <FiCreditCard className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">안전 결제</h3>
              <p className="text-gray-600">다양한 결제 방법과 함께 안전한 구매를 보장합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 베스트셀러 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">베스트셀러</h2>
              <p className="text-gray-600 mt-2">고객들이 가장 많이 찾는 건강기능식품</p>
            </div>
            <Link href="/best-sellers" className="flex items-center text-primary-600 hover:text-primary-700">
              <span className="mr-1">전체보기</span>
              <FiChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* 카테고리 섹션 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">건강고민별 제품</h2>
            <p className="text-gray-600 mt-2">나에게 필요한 건강기능식품을 카테고리별로 찾아보세요</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.id}
                href={`/categories/${category.id}`}
                className="group block bg-gray-50 p-6 rounded-lg text-center transition-all hover:shadow-md hover:bg-primary-50"
              >
                <h3 className="font-medium text-gray-900 group-hover:text-primary-600">{category.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{category.count}개 제품</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 신제품 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">신상품</h2>
              <p className="text-gray-600 mt-2">최근에 입고된 신상품을 만나보세요</p>
            </div>
            <Link href="/new-arrivals" className="flex items-center text-primary-600 hover:text-primary-700">
              <span className="mr-1">전체보기</span>
              <FiChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(4, 8).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* 건강 상담 섹션 */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                전문 약사의 1:1 맞춤형<br />
                건강 상담 서비스
              </h2>
              <p className="text-gray-600 mb-6">
                나에게 맞는 건강기능식품을 찾기 어려우신가요?<br />
                한결약국 전문 약사가 건강 상태에 맞는 제품을 추천해 드립니다.
              </p>
              <Link 
                href="/consultation"
                className="btn-primary"
              >
                무료 상담 신청
              </Link>
            </div>
            <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-center">상담 신청</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="연락처를 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-1">건강 고민</label>
                  <textarea 
                    id="concern" 
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="건강 고민을 입력하세요"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full btn-primary"
                >
                  상담 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 