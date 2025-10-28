import { useState, useEffect } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<{ email: string; loggedIn: boolean } | null>(null);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Show login dialog after splash screen (2 seconds delay)
      const timer = setTimeout(() => {
        setShowLoginDialog(true);
      }, 2100);
      return () => clearTimeout(timer);
    }
  }, []);

  const login = (email: string) => {
    const userData = { email, loggedIn: true };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const requireLogin = (callback: () => void) => {
    if (user?.loggedIn) {
      callback();
    } else {
      setShowLoginDialog(true);
    }
  };

  return {
    user,
    login,
    logout,
    showLoginDialog,
    setShowLoginDialog,
    requireLogin,
    isLoggedIn: !!user?.loggedIn,
  };
};
