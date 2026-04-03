
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function Layout({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Loader /> : children;
}
export default Layout;
