import { Card } from "@/components/ui/Card";

export default function SupportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Get <span className="text-jungle-green">Support</span>
      </h1>
      <div className="max-w-3xl mx-auto">
        <Card>
          <h2 className="text-2xl font-semibold mb-6">How We Can Help</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-jungle-green pl-4">
              <h3 className="font-semibold text-lg">Academic Guidance</h3>
              <p className="text-slate-600 mt-1">Connect with senior students for course selection and study tips</p>
            </div>
            <div className="border-l-4 border-unm-cherry pl-4">
              <h3 className="font-semibold text-lg">Housing Assistance</h3>
              <p className="text-slate-600 mt-1">Find roommates and affordable housing options near campus</p>
            </div>
            <div className="border-l-4 border-slate-700 pl-4">
              <h3 className="font-semibold text-lg">Cultural Adjustment</h3>
              <p className="text-slate-600 mt-1">Support for international students adapting to life in the US</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-slate-50 rounded-xl">
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <p className="text-slate-600">Email: bsa@unm.edu</p>
            <p className="text-slate-600">Office: Student Union Building, Room 101</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
