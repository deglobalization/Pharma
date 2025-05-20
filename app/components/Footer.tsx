'use client';

import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-secondary-800 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">한결약국</h3>
            <p className="text-gray-300 mb-4">
              믿을 수 있는 건강 파트너, 한결약국입니다.<br />
              건강기능식품 전문 온라인 몰에서 건강한 삶을 지원합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">쇼핑하기</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-300 hover:text-white">전체 제품</Link></li>
              <li><Link href="/best-sellers" className="text-gray-300 hover:text-white">베스트셀러</Link></li>
              <li><Link href="/categories/vitamins" className="text-gray-300 hover:text-white">비타민</Link></li>
              <li><Link href="/categories/minerals" className="text-gray-300 hover:text-white">미네랄</Link></li>
              <li><Link href="/categories/probiotics" className="text-gray-300 hover:text-white">프로바이오틱스</Link></li>
              <li><Link href="/categories/omega" className="text-gray-300 hover:text-white">오메가3</Link></li>
            </ul>
          </div>

          {/* 고객센터 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">고객센터</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">회사소개</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white">자주 묻는 질문</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-white">배송 정책</Link></li>
              <li><Link href="/returns" className="text-gray-300 hover:text-white">반품 정책</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">이용약관</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">개인정보처리방침</Link></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="h-5 w-5 mr-2 mt-0.5 text-primary-400" />
                <span className="text-gray-300">경기도 하남시 신평로 70</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="h-5 w-5 mr-2 text-primary-400" />
                <span className="text-gray-300">031-791-5667</span>
              </li>
              <li className="flex items-center">
                <FiMail className="h-5 w-5 mr-2 text-primary-400" />
                <span className="text-gray-300">info@hangyeol.pharmacy</span>
              </li>
              <li className="text-gray-300 mt-4">
                <p className="font-semibold">영업시간</p>
                <p className="mt-1">평일: 오전 9시 - 오후 7시</p>
                <p>토요일: 오전 9시 - 오후 2시</p>
                <p>공휴일 및 일요일 휴무</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 카피라이트 */}
        <div className="pt-6 border-t border-gray-700 text-sm text-gray-400">
          <p>© 2023 한결약국. All rights reserved.</p>
          <p className="mt-2">사업자등록번호: 123-45-67890 | 대표: 박희원 | 통신판매업신고: 제2023-서울강남-1234호</p>
        </div>
      </div>
    </footer>
  );
} 