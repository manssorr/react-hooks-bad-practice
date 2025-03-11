import { LoginForm } from '@/components/LoginForm';
import { BadUserProfile, GoodUserProfile } from '@/components/UserProfile';
import { BadUserType, GoodUserType } from '@/components/UserType';
import { useUserStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function App() {
  const user = useUserStore((state) => state.user);
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">React Hook Optimization Demo</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This demo shows the impact of poorly implemented custom hooks on React render performance.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Log in using the form below</li>
            <li>Click the buttons in each component</li>
            <li>Observe with React Scan which components re-render unnecessarily</li>
          </ol>
        </CardContent>
      </Card>
      
      {!user && <LoginForm />}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-destructive">Bad Implementation</h2>
          <p className="text-sm text-muted-foreground mb-4">
            These components use hooks that cause unnecessary re-renders
          </p>
          <BadUserProfile />
          <BadUserType />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4 text-green-600">Good Implementation</h2>
          <p className="text-sm text-muted-foreground mb-4">
            These components use optimized hooks to minimize re-renders
          </p>
          <GoodUserProfile />
          <GoodUserType />
        </div>
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Key Takeaways</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Use selective state subscription with Zustand</li>
            <li>Memoize derived values and callback functions</li>
            <li>Split complex hooks into smaller ones with single responsibilities</li>
            <li>Only subscribe to the state you actually need in each component</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;