
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  MapPin, 
  AlertTriangle, 
  Shield,
  Fuel,
  Zap,
  Clock,
  TrendingUp
} from "lucide-react";

export function Dashboard() {
  const stats = [
    {
      title: "Total Vehicles",
      value: "12",
      change: "+2 this month",
      icon: Car,
      color: "blue"
    },
    {
      title: "Active Tracking",
      value: "10",
      change: "2 offline",
      icon: MapPin,
      color: "green"
    },
    {
      title: "Active Alerts",
      value: "3",
      change: "2 resolved today",
      icon: AlertTriangle,
      color: "red"
    },
    {
      title: "Geofences",
      value: "8",
      change: "All active",
      icon: Shield,
      color: "purple"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      vehicle: "Truck-001",
      event: "Entered geofence: Warehouse A",
      time: "2 minutes ago",
      type: "geofence"
    },
    {
      id: 2,
      vehicle: "Van-003",
      event: "Speed limit exceeded (85 km/h)",
      time: "5 minutes ago",
      type: "alert"
    },
    {
      id: 3,
      vehicle: "Car-002",
      event: "Engine turned off",
      time: "8 minutes ago",
      type: "command"
    },
    {
      id: 4,
      vehicle: "Truck-002",
      event: "Low fuel warning (15%)",
      time: "12 minutes ago",
      type: "alert"
    }
  ];

  const onlineVehicles = [
    {
      id: 1,
      name: "Truck-001",
      location: "Jl. Sudirman, Jakarta",
      speed: "45 km/h",
      fuel: 78,
      battery: 92,
      status: "moving"
    },
    {
      id: 2,
      name: "Van-003",
      location: "Jl. Gatot Subroto, Jakarta",
      speed: "0 km/h",
      fuel: 45,
      battery: 88,
      status: "parked"
    },
    {
      id: 3,
      name: "Car-002",
      location: "Jl. Thamrin, Jakarta",
      speed: "32 km/h",
      fuel: 89,
      battery: 95,
      status: "moving"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`w-4 h-4 text-${stat.color}-600`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              <p className="text-xs text-slate-500 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'alert' ? 'bg-red-500' :
                    activity.type === 'geofence' ? 'bg-blue-500' :
                    'bg-green-500'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-slate-800">
                        {activity.vehicle}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {activity.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{activity.event}</p>
                    <p className="text-xs text-slate-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Online Vehicles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Online Vehicles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {onlineVehicles.map((vehicle) => (
                <div key={vehicle.id} className="p-4 border rounded-lg hover:bg-slate-50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-slate-800">{vehicle.name}</h4>
                      <Badge 
                        variant={vehicle.status === 'moving' ? 'default' : 'secondary'}
                        className={`text-xs ${
                          vehicle.status === 'moving' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {vehicle.status}
                      </Badge>
                    </div>
                    <span className="text-sm font-medium text-blue-600">{vehicle.speed}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{vehicle.location}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Fuel className="w-3 h-3 text-blue-500" />
                      <span>{vehicle.fuel}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-green-500" />
                      <span>{vehicle.battery}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            Fleet Overview Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-200">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-blue-600 mb-2">Interactive Map</h3>
              <p className="text-blue-500">Real-time vehicle locations will be displayed here</p>
              <p className="text-sm text-blue-400 mt-2">Integration with mapping service required</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
