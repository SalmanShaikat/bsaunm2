import { Activity, Users, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold">
            <span className="text-jungle-green">BSA</span>
            <span className="text-unm-cherry">UNM</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Bangladesh Students Association at University of New Mexico
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card>
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Activity className="w-8 h-8 text-jungle-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cultural Events</h3>
            <p className="text-slate-600">Celebrating Bangladeshi heritage through festivals and gatherings</p>
          </Card>

          <Card>
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-unm-cherry" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-slate-600">Building a home away from home for Bangladeshi students</p>
          </Card>

          <Card>
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <HelpCircle className="w-8 h-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Academic Help</h3>
            <p className="text-slate-600">Study groups and mentorship for academic success</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
