import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BotAvartarProps {
  src: string;
}

export const BotAvartar = ({ src }: BotAvartarProps) => {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
