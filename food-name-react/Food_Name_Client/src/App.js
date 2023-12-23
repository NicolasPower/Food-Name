import React, { useState, useEffect } from 'react';

function App() {
  const [backendData, setData] = useState({});
  const [requestSent, setRequestSent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fetchData = () => {
    fetch(`/api/${firstName}/${lastName}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setRequestSent(true);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (requestSent) {
      fetchData();
    }
  }, [requestSent]);

  const handleYumTimeClick = () => {
    setRequestSent(false);
    setLoading(true);
    fetchData();
  };

  const handleBackButtonClick = () => {
    setFirstName(''); // Clear firstName
    setLastName('');  // Clear lastName
    setRequestSent(false);
  };

  return (
    <div>
      {!requestSent ? (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-500 to-blue-500">
          <p className="font-bold text-4xl p-10">Musical Foods - Name edition</p>
          <div className="flex flex-row justify-around w-2/5">
            <input
              type="text"
              id="firstName"
              className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white border text-sm basis-3/9 w-3/9 p-2.5"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              id="lastName"
              className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white border text-sm basis-3/9 w-3/9 p-2.5"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <button
              type="button"
              className="bg-emerald-800 border-gray-600 placeholder-gray-400 text-white focus:bg-emerald-500 focus:font-bold border text-sm basis-2/9 w-2/9 p-2.5"
              onClick={handleYumTimeClick}
            >
              Yum Time
            </button>
          </div>
        </main>
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-500 to-blue-500">
          <div className="flex flex-col bg-gray-600 rounded p-1 w-6/12">
            <h1 className="font-bold">{backendData.firstName + ' ' + backendData.lastName}</h1>
            <p>Wow so cool! Your name originates from {backendData.country}</p>
          </div>
          <div className="flex flex-row rounded w-6/12 justify-between pt-1">
            <div className="py-1 pr-1 w-2/5">
              <div className="flex flex-col flex-wrap bg-emerald-700 rounded p-1 h-auto">
                <a className="text-blue-800 underline" href={backendData.playlistLink}>
                  {backendData.playlistName}
                </a>
                <p>is a popular playlist from {backendData.country}</p>
              </div>
            </div>
            <div className="p-1 w-2/5">
              <div className="flex flex-col flex-wrap bg-orange-400 rounded p-1 h-auto">
                <p>here is a popular recipe from there</p>
                <a className="text-blue-800 underline" href={backendData.recipeLink}>
                  {backendData.recipeName}
                </a>
              </div>
            </div>
            <button
              type="button"
              className="bg-emerald-800 border-gray-600 placeholder-gray-400 text-white focus:bg-emerald-500 focus:font-bold border text-sm w-1/5 p-1 rounded"
              onClick={handleBackButtonClick} // Call handleBackButtonClick when the button is clicked
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
