import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useBadUserManager } from '@/hooks/useBadUserManager';
import { useGoodUserManager } from '@/hooks/useGoodUserManager';
import { useRenderCounter } from '@/hooks/useRenderCounter';

export const BadUserProfile = () => {
  const { user, isActive, getUserFullName, toggleStatus, logout } = useBadUserManager();
  const { count } = useRenderCounter();
  
  if (!user) return <div>Please log in</div>;
  
  // Force re-render on every parent update
  const randomKey = Math.random();
  
  return (
    <Card key={randomKey} className="relative">
      <Badge 
        variant="secondary"
        className="absolute -top-2 -right-2 font-mono"
      >
        Renders: {count}
      </Badge>
      <CardHeader>
        <CardTitle>Bad User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>Name: {getUserFullName()}</p>
        <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
        <div className="flex space-x-2">
          <Button variant="secondary" onClick={toggleStatus}>
            Toggle Status
          </Button>
          <Button variant="destructive" onClick={logout}>
            Logout
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const GoodUserProfile = () => {
  const { user, isActive, getUserFullName, toggleStatus, logout } = useGoodUserManager();
  const { count } = useRenderCounter();
  
  if (!user) return <div>Please log in</div>;
  
  return (
    <Card className="relative">
      <Badge 
        variant="secondary"
        className="absolute -top-2 -right-2 font-mono"
      >
        Renders: {count}
      </Badge>
      <CardHeader>
        <CardTitle>Good User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>Name: {getUserFullName()}</p>
        <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
        <div className="flex space-x-2">
          <Button variant="secondary" onClick={toggleStatus}>
            Toggle Status
          </Button>
          <Button variant="destructive" onClick={logout}>
            Logout
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};