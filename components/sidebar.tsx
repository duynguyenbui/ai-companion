'use client';

import { Home, PlusIcon, Settings } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ProModal } from './pro-modal';
import { useProModal } from '@/hooks/use-pro-modal';

interface SidebarProps {
  isPro: boolean;
}

export const Sidebar = ({ isPro }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const proModal = useProModal();
  const routes = [
    {
      icon: Home,
      herf: '/',
      label: 'Home',
      pro: false,
    },
    {
      icon: PlusIcon,
      herf: '/companion/new',
      label: 'Create',
      pro: true,
    },
    {
      icon: Settings,
      herf: '/settings',
      label: 'Settings',
      pro: false,
    },
  ];

  const onNavigate = (url: string, pro: boolean) => {
    if (pro && !isPro) {
      return proModal.onOpen();
    }
    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.herf, route.pro)}
              key={route.herf}
              className={cn(
                'text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary rounded-lg transition',
                pathname === route.herf && 'text-primary bg-primary/10'
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
