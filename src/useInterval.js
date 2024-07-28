import { useEffect } from "react";

export function useInterval(onTick, delay) {
  return useEffect(() => {
    const id = setInterval(onTick(), delay);

    return () => clearInterval(id);
  }, [delay, onTick]);
}
