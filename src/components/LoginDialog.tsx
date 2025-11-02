import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogin: (email: string) => void;
}

const LoginDialog = ({ open, onOpenChange, onLogin }: LoginDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Mock login/signup - store in localStorage
    localStorage.setItem("user", JSON.stringify({ email, loggedIn: true }));
    onLogin(email);
    onOpenChange(false);
    
    toast({
      title: "Success",
      description: isSignup 
        ? "Account created successfully!" 
        : "You've been logged in successfully!",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome to AntiWorld</DialogTitle>
          <DialogDescription>
            {isSignup 
              ? "Create an account to access exclusive features and preorder products"
              : "Login to access exclusive features and preorder products"
            }
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <Button type="submit" className="w-full">
              {isSignup ? "Create Account" : "Login"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => window.location.href = 'https://lovable.dev/projects/b566d9e9-73e2-4aad-83fc-19b14a486c15'}
              className="w-full"
            >
              Create new account
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
