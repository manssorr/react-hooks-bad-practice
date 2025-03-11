import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useBadUserType, useGoodUserType } from '@/hooks/useUserType';
import { useUserStore } from '@/lib/store';
import type { UserType } from '@/lib/store';
import { useRenderCounter } from '@/hooks/useRenderCounter';

export const BadUserType = () => {
  const { normalizedType, originalType } = useBadUserType();
  const { updateUserType } = useUserStore();
  const { count } = useRenderCounter();
  
  const changeType = () => {
    const types: UserType[] = ['STANDARD', 'PREMIUM', 'ADMIN'];
    const currentIndex = types.indexOf(originalType);
    const nextIndex = (currentIndex + 1) % types.length;
    updateUserType(types[nextIndex]);
  };
  
  return (
    <Card className="relative">
      <Badge 
        variant="secondary"
        className="absolute -top-2 -right-2 font-mono"
      >
        Renders: {count}
      </Badge>
      <CardHeader>
        <CardTitle>Bad User Type</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>Type: {normalizedType}</p>
        <Button onClick={changeType}>
          Change Type
        </Button>
      </CardContent>
    </Card>
  );
};

export const GoodUserType = () => {
  const { normalizedType, originalType } = useGoodUserType();
  const updateUserType = useUserStore((state) => state.updateUserType);
  const { count } = useRenderCounter();
  
  const changeType = () => {
    const types: UserType[] = ['STANDARD', 'PREMIUM', 'ADMIN'];
    const currentIndex = types.indexOf(originalType);
    const nextIndex = (currentIndex + 1) % types.length;
    updateUserType(types[nextIndex]);
  };
  
  return (
    <Card className="relative">
      <Badge 
        variant="secondary"
        className="absolute -top-2 -right-2 font-mono"
      >
        Renders: {count}
      </Badge>
      <CardHeader>
        <CardTitle>Good User Type</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>Type: {normalizedType}</p>
        <Button onClick={changeType}>
          Change Type
        </Button>
      </CardContent>
    </Card>
  );
};