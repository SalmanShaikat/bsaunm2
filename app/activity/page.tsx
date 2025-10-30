import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const events = [
  { title: "Pohela Boishakh", date: "April 14, 2025", desc: "Bengali New Year celebration with traditional food and performances" },
  { title: "Eid Reunion", date: "March 30, 2025", desc: "Eid-ul-Fitr gathering with prayers and festive dinner" },
  { title: "Study Sessions", date: "Every Thursday", desc: "Weekly group study sessions for all majors" },
  { title: "Sports Day", date: "February 22, 2025", desc: "Annual cricket and football tournament" },
];

export default function ActivityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        <span className="text-jungle-green">Our</span> Activities
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((e, i) => (
          <Card key={i}>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold">{e.title}</h3>
              <Badge>{e.date}</Badge>
            </div>
            <p className="text-slate-600">{e.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
