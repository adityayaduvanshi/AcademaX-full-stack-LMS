import { SearchInput } from '@/components/search-input';
import Categories from './search/_components/categories';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { getCourses } from '@/actions/get-courses';
import { CoursesList } from '@/components/courses-list';

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

export default async function Home({ searchParams }: SearchPageProps) {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });
  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories items={categories} />
        <CoursesList items={courses} />
      </div>
    </>
  );
}
