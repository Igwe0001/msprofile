function SideCard({ selectedUser }) {
  return (
    <div className="flex-1 max-w-xs bg-white rounded-2xl shadow p-6">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-xs font-bold">Make Lead Auditor</p>
        <img
          src={selectedUser?.image}
          alt={selectedUser?.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <h2 className="text-lg font-semibold">{selectedUser?.name}</h2>
        <button className="px-4 py-1 bg-gray-200 text-sm rounded-full">
          Add professional
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-sm font-semibold">Experience</h3>
        <p className="mt-1 text-xs">
          Let’s make the right match. Fill out the form to explore talent or
          opportunities that align perfectly with your goals
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-sm font-semibold">Skills</h3>
        <ul className="mt-1 space-y-1 text-xs list-none">
          <li>Auditing</li>
          <li>Leadership</li>
          <li>Team Management</li>
          <li>Problem Solving</li>
        </ul>
      </div>

      <div className="mt-16">
        <h3 className="text-sm font-semibold">Certification</h3>
        <ul className="mt-1 space-y-2 text-xs ">
          <li>
            <p className="font-medium">Certificate of Completion</p>
            <p>Food safety</p>
          </li>
          <li>
            <p className="font-medium">Certificate of Completion</p>
            <p>Quality Management System</p>
          </li>
          <li>
            <p className="font-medium">Certificate of Completion</p>
            <p>Food safety</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideCard;
