import { useState } from "react";
import TablesContainer from "../../features/TablesContainer/TablesContainer";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";

const Home = () => {
  const [loading, setLoading] =useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>
      <div>
        <h2>All tables</h2>
      </div>
      {loading ? <LoadingSpinner /> : <TablesContainer />}
    </div>
  );
};

export default Home;
