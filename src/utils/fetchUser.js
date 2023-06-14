// Función asíncrona para obtener los datos del usuario de gitHub
export default async function fetchUser(user) {
  const request = await fetch(`https://api.github.com/users/${user}`);
  const response = await request.json();
  return response;
}
