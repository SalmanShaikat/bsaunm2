const team = [
  { name: "Rahim Khan", role: "President", dept: "Computer Science" },
  { name: "Ayesha Rahman", role: "Vice President", dept: "Business Administration" },
  { name: "Karim Hossain", role: "Treasurer", dept: "Engineering" },
];

export default function PeoplePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Meet Our <span className="text-unm-cherry">Team</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((p, i) => (
          <div key={i} className="text-center space-y-4">
            <div className="bg-gradient-to-br from-emerald-200 to-red-200 w-32 h-32 rounded-full mx-auto flex items-center justify-center">
              <div className="bg-white/80 w-28 h-28 rounded-full flex items-center justify-center text-3xl font-bold text-slate-700">
                {p.name.split(" ").map(n => n[0]).join("")}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-jungle-green font-medium">{p.role}</p>
              <p className="text-sm text-slate-600">{p.dept}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
