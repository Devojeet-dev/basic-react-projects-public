import React, { useState } from "react";

function Github() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGithubData = async () => {
    if (!user) return;

    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      if (!res.ok) throw new Error("User not found");
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black 
                    flex items-center justify-center px-4">

      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchGithubData();
        }}
        className="bg-gray-800/80 backdrop-blur-lg 
                   rounded-2xl shadow-xl 
                   p-6 sm:p-8 
                   w-full max-w-md 
                   space-y-6"
      >

        <h1 className="text-2xl font-bold text-center text-white">
          GitHub Profile Finder
        </h1>

        <input
          type="text"
          placeholder="Enter GitHub username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full px-4 py-3 rounded-xl
                     bg-gray-900 text-white
                     placeholder-gray-400
                     border border-gray-700
                     focus:outline-none focus:ring-2
                     focus:ring-orange-500
                     transition"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl font-semibold
                     bg-orange-500 hover:bg-orange-600
                     text-black
                     transition duration-200 active:scale-95"
        >
          Search
        </button>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-400">Loading...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {/* Profile Card */}
        {data && (
          <div className="bg-gray-900 rounded-xl p-4 space-y-4 text-center">

            <img
              src={data.avatar_url}
              alt="avatar"
              className="w-24 h-24 rounded-full mx-auto border-2 border-orange-500"
            />

            <div>
              <h2 className="text-xl font-bold text-white">
                {data.name || "No Name"}
              </h2>
              <p className="text-gray-400">@{data.login}</p>
            </div>

            {data.bio && (
              <p className="text-gray-300 text-sm">{data.bio}</p>
            )}

            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <p className="text-white font-bold">{data.followers}</p>
                <p className="text-gray-400">Followers</p>
              </div>
              <div>
                <p className="text-white font-bold">{data.following}</p>
                <p className="text-gray-400">Following</p>
              </div>
              <div>
                <p className="text-white font-bold">{data.public_repos}</p>
                <p className="text-gray-400">Repos</p>
              </div>
            </div>

            {data.location && (
              <p className="text-gray-400 text-sm">📍 {data.location}</p>
            )}

            <a
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 px-4 py-2 rounded-lg
                         bg-orange-500 text-black font-semibold
                         hover:bg-orange-600 transition"
            >
              View Profile
            </a>

          </div>
        )}
      </form>
    </div>
  );
}

export default Github;
