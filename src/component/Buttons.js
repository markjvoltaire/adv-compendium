import React from 'react';

export default function Buttons({ query, setQuery, setLoading }) {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
      <button onClick={() => setLoading(true)}>Search Pokemon</button>
    </div>
  );
}
