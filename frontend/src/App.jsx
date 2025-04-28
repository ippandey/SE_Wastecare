import Layout from "./Layout/Layout";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />; // Don't render Layout until loading is done
  }

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
