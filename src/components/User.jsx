export default async function User({ user }) {
  //   const request = await fetch(user.avatar_url);
  //   const response = await request.json();
  //   console.log(response);

  return (
    <>
      <div className="container mx-auto">
        <div>
          <h1 className="font-bold text-2xl">Datos de Usuario</h1>
          <p>Nombre: {user.login}</p>
        </div>
      </div>
    </>
  );
}
