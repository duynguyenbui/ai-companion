import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';

export const UserAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar>
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
