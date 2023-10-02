'use client';

import { Category } from '@prisma/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { CategoryItem } from './category-item';
import { cn } from '@/lib/utils';

interface CategoriesProps {
  items: Category[];
}

const Categories = ({ items }: CategoriesProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get('categoryId');
  const currentTitle = searchParams.get('title');
  const onClick = () => {
    router.push('/');
  };
  const isSelected = pathname === '/' && !currentCategoryId && !currentTitle;

  return (
    <div className="flex items-center gap-2  flex-wrap pb-2">
      <button
        onClick={onClick}
        className={cn(
          'py-2 px-3 text-xs font-semibold border border-slate-200  rounded-md flex items-center gap-x-1 hover:border-sky-700 transition',
          isSelected && 'border-sky-700 bg-sky-200/20 text-sky-800'
        )}
        type="button"
      >
        <div className="truncate">All</div>
      </button>
      {items.map((item) => (
        <CategoryItem key={item.id} label={item.name} value={item.id} />
      ))}
    </div>
  );
};

export default Categories;
