import './App.css';
import { useState } from 'react';
import fetchUser from './utils/fetchUser';
import User from './components/User';
function App() {
  const [user, setUser] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Obtenemos los datos del formulario
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const { userGh } = data;
    if (!userGh) {
      setUser('');
      return;
    }
    // Hacemos la peticion a al API
    const user = await fetchUser(userGh);
    setUser(user);
    console.log(user);
  };
  return (
    <main className="bg-slate-800 min-h-screen text-white">
      <div className="flex flex-col items-center container mx-auto py-5">
        {/* form */}
        <div>
          <h1 className="font-bold text-2xl">Search User GitHub</h1>
          <form onSubmit={handleSubmit} className="flex flex-col justify-start items-center py-5">
            <label htmlFor="userGh" className="block mb-2 text-sm font-medium text-white">
              User
            </label>
            <input
              type="text"
              id="user"
              name="userGh"
              className="outline-none p-2 rounded-xl text-black"
              placeholder="User"
            />
            <button className="bg-slate-900 text-white p-2 rounded-xl my-5 focus:bg-slate-500">Search</button>
          </form>
          {/*  */}
        </div>
        <div>
          {user ? (
            <>
              <div className="container mx-auto">
                <div className="flex flex-col items-center gap-5 p-5">
                  <p>
                    {user.name} <span>({user.location})</span>
                  </p>
                  <img className="rounded-full" src={user.avatar_url} alt={user.id} />
                  <div className="flex items-end justify-center gap-3">
                    <a href={user.html_url} className="text-2xl ">
                      {user.login}
                    </a>
                    <span className="text-sm font-bold">#{user.id}</span>
                  </div>
                  <p>{user.bio}</p>
                  <div className="flex justify-center gap-4">
                    <span>Followers: {user.followers}</span>
                    <span>Following: {user.following}</span>
                  </div>
                  <a href={user.repos_url}>Repositorios</a>
                </div>
              </div>
            </>
          ) : (
            <p className="text-center mt-5">Usuario no encontrado</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
