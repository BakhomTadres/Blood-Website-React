import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const UserContext = createContext(null);


export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("https://blood-website-backend.vercel.app/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.data.user);
      } catch (err) {
        localStorage.removeItem("token"); 
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
