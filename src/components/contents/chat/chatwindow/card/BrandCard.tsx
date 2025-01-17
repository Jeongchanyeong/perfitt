import { Link } from 'react-router-dom';
import { rightArrowShort } from '../../../../../assets/images/images';
import { IBrandCardProps } from '../../../../../types/chat';

const BrandCard = ({ brand }: IBrandCardProps) => {
  return (
    <div className='border border-[#E4E4E7] rounded-md flex flex-col items-center w-fit cursor-pointer'>
      <div className='flex items-center justify-center w-[110px] h-[103px] rounded-t-md'>
        <Link to={brand.link}>
          <img
            className='w-22 h-12'
            src={brand.thumbnail}
            alt={brand.brand}
          />
        </Link>
      </div>
      <div className='flex justify-center items-center relative w-full h-[29px] text-center border-t border-[#E4E4E7]'>
        <button className='flex items-center font-medium text-[#71717A] text-[10px]'>
          전체 상품 보기
          <img
            className='absolute right-4'
            src={rightArrowShort}
            alt='rightArrow'
          />
        </button>
      </div>
    </div>
  );
};

export default BrandCard;
