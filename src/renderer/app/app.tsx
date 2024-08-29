import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [query, setQuery] = useState<string>('SELECT * FROM customer where id ="2";');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await window.electron.queryDatabase(query);
        console.log("result:", result);

        // Check if result is an array or object with an array property
        if (Array.isArray(result)) {
          setData(result);
        } else if (result && Array.isArray(result.rows)) { // Adjust based on actual structure
          setData(result.rows);
        } else {
          console.error('Unexpected data structure:', result);
        }
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter SQL query"
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <button
        onClick={() => setQuery(query)}
        className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600"
      >
        Run Query
      </button>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
          data.map((row, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-md">
              <p><strong>ID:</strong> {row.id}</p>
              <p><strong>Name:</strong> {row.name}</p>
              <p><strong>Email:</strong> {row.email}</p>
              <p><strong>Phone:</strong> {row.phone}</p>
              <p><strong>Address:</strong> {row.address}</p>
              <p><strong>Created At:</strong> {row.created_at}</p>
              <p><strong>Updated At:</strong> {row.updated_at}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
