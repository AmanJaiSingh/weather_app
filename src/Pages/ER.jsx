import React, { useState, useEffect } from "react";

export default function ER() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://freecurrencyapi.net/api/v2/latest?apikey=21ab22c0-53a5-11ec-a40d-b76ac202b200&base_currency=INR`;
      const response = await fetch(url);
      const resJson = await response.json();
      setData(resJson);
      console.log(resJson);
    };
    fetchApi();
  }, []);

  return (
    <div>
      {data ? (
        <div
          className="ml-20 w-36 
          bg-green-500"
        >
          <table className="border-8">
            <tr className="border-4">
              <td>Currency</td>
              <td>Price</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>{data.data.USD}</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>{data.data.EUR}</td>
            </tr>
          </table>
        </div>
      ) : (
        <div>
          <h1>Api limit reached</h1>
          <h1>Sample</h1>
          <table className="border-8">
            <tr className="border-4">
              <td>Currency</td>
              <td>Price</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>0.01</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>0.01</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
}
