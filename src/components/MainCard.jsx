import users from "../data/user";

function MainCard({ setSelectedUser }) {
  return (
    <div className="flex-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative h-[360px] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition duration-300"
            onClick={() => setSelectedUser(user)}
          >
            <img
              src={user.image}
              alt={user.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 z-10 p-4 text-white">
              <h2 className="text-lg font-semibold leading-tight">
                {user.name}
              </h2>
              <p className="text-sm font-medium">{user.title}</p>
              <p className="text-xs mt-1 leading-snug">{user.description}</p>
              <button className="mt-2 text-xs underline">View Profile</button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between">
        <button className="font-bold">Back</button>
        <button className="font-bold">Next</button>
      </div>
    </div>
  );
}

export default MainCard;
