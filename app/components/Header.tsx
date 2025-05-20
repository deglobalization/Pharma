'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              한결약국
            </Link>
          </div>

          {/* 검색창 - 데스크톱 */}
          <div className="hidden md:block flex-grow mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="건강기능식품 검색하기..."
                className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="absolute right-0 top-0 mt-2 mr-3 text-gray-400 hover:text-primary-500">
                <FiSearch className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 네비게이션 - 데스크톱 */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="text-gray-700 hover:text-primary-600">제품</Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary-600">카테고리</Link>
            <Link href="/best-sellers" className="text-gray-700 hover:text-primary-600">베스트</Link>
            <Link href="/consultation" className="text-gray-700 hover:text-primary-600">건강상담</Link>
            <Link href="/cart" className="text-gray-700 hover:text-primary-600 relative">
              <FiShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-primary-600">
              <FiUser className="h-6 w-6" />
            </Link>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className="pt-2 pb-4 md:hidden">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="건강기능식품 검색하기..."
                  className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="absolute right-0 top-0 mt-2 mr-3 text-gray-400 hover:text-primary-500">
                  <FiSearch className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Link href="/products" className="text-gray-700 hover:text-primary-600 py-2 px-1">제품</Link>
              <Link href="/categories" className="text-gray-700 hover:text-primary-600 py-2 px-1">카테고리</Link>
              <Link href="/best-sellers" className="text-gray-700 hover:text-primary-600 py-2 px-1">베스트</Link>
              <Link href="/consultation" className="text-gray-700 hover:text-primary-600 py-2 px-1">건강상담</Link>
              <Link href="/cart" className="text-gray-700 hover:text-primary-600 py-2 px-1 flex items-center">
                <FiShoppingCart className="h-5 w-5 mr-2" />
                <span>장바구니 (3)</span>
              </Link>
              <Link href="/account" className="text-gray-700 hover:text-primary-600 py-2 px-1 flex items-center">
                <FiUser className="h-5 w-5 mr-2" />
                <span>내 계정</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 