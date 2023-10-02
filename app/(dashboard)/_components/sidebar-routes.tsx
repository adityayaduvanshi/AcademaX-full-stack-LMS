'use client';

import { Layout, Compass, BarChart, List } from 'lucide-react';
import SidebarItem from './sidebar-item';
import { usePathname } from 'next/navigation';

const guestRoutes = [
  { icon: Compass, label: 'Browse', href: '/' },
  { icon: Layout, label: 'Dashboard', href: '/dashboard' },
];
const teacherRoutes = [
  { icon: List, label: 'Courses', href: '/teacher/courses' },
  { icon: BarChart, label: 'Analytics', href: '/teacher/analytics' },
];

const SidebarRoutes = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes('/teacher');
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
export default SidebarRoutes;
