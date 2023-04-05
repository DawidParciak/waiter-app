import { useState } from "react";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import TableUpdateForm from "../../features/TableUpdateForm/TableUpdateForm";

const Table = () => {
  const [loading, setLoading] =useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>
      {loading ? <LoadingSpinner /> :<TableUpdateForm />}
    </div>
  );
};

export default Table;
