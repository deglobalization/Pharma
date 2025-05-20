'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  salePrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
}

export default function ProductCard({
  id,
  title,
  price,
  salePrice,
  image,
  category,
  isNew = false,
  isBestSeller = false,
  isOnSale = false,
}: ProductCardProps) {
  
  const handleAddToCart = () => {
    // 장바구니 추가 로직 구현
    console.log(`상품 ${id}를 장바구니에 추가했습니다.`);
  };

  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        {/* 제품 이미지 */}
        <Link href={`/products/${id}`}>
          <div className="relative h-64 w-full transition-transform duration-300 group-hover:scale-105">
            <Image 
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={isBestSeller}
            />
          </div>
        </Link>
        
        {/* 뱃지 */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <span className="inline-block bg-primary-500 text-white text-xs px-2 py-1 rounded-md">NEW</span>
          )}
          {isBestSeller && (
            <span className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-md">BEST</span>
          )}
          {isOnSale && (
            <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-md">SALE</span>
          )}
        </div>
        
        {/* 장바구니 버튼 */}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-0 right-0 m-2 p-2 bg-white rounded-full shadow-md hover:bg-primary-50 transition-colors"
          aria-label="장바구니에 추가"
        >
          <FiShoppingCart className="h-5 w-5 text-primary-600" />
        </button>
      </div>
      
      <div className="p-4">
        {/* 카테고리 */}
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        
        {/* 제품명 */}
        <Link href={`/products/${id}`}>
          <h3 className="font-medium text-gray-900 mb-1 hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        {/* 가격 */}
        <div className="flex items-center">
          {salePrice ? (
            <>
              <span className="text-red-600 font-bold mr-2">
                {salePrice.toLocaleString()}원
              </span>
              <span className="text-gray-500 text-sm line-through">
                {price.toLocaleString()}원
              </span>
            </>
          ) : (
            <span className="text-gray-900 font-bold">
              {price.toLocaleString()}원
            </span>
          )}
        </div>
      </div>
    </div>
  );
} 