'use client'

import { useEffect } from "react";

const Error = ({ error, reset }: {
  error: string;
  reset: () => void;
}) => {

  useEffect(() => {
    console.error(error);
  }, [error])

  return (
    <div>
      <p>{error}</p>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}


export default Error