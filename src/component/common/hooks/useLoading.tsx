import { useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const startLoading = (): void => {
    setLoading(true);
  };

  const stopLoading = (): void => {
    setLoading(false);
  };

  return { loading, startLoading, stopLoading };
};

export default useLoading;
