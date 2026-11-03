
import {
  LayoutDashboard,
  ArrowLeftRight,
  Users,
  Shield,
  Trophy,
  BarChart3,
  Search,
  Bell,
  Settings,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { match: "M1", performance: 62 },
  { match: "M2", performance: 68 },
  { match: "M3", performance: 64 },
  { match: "M4", performance: 75 },
  { match: "M5", performance: 81 },
  { match: "M6", performance: 78 },
];

function App() {
  return (
    <div className="min-h-screen bg-[#08080d] text-white flex">
      <aside className="w-64 shrink-0 border-r border-white/10 bg-[#0d0d14] p-5">
        <div className="mb-10">
          <h1 className="text-2xl font-bold">
            PL <span className="text-purple-500">INSIGHT</span>
          </h1>
          <p className="mt-1 text-xs text-gray-500">
            Football Intelligence
          </p>
        </div>

        <nav className="space-y-2">
          <NavItem icon={<LayoutDashboard size={18} />} text="Dashboard" active />
          <NavItem icon={<ArrowLeftRight size={18} />} text="Transfers" />
          <NavItem icon={<Users size={18} />} text="Players" />
          <NavItem icon={<Shield size={18} />} text="Teams" />
          <NavItem icon={<Trophy size={18} />} text="Matches" />
          <NavItem icon={<BarChart3 size={18} />} text="Analytics" />
        </nav>

        <div className="mt-10">
          <NavItem icon={<Settings size={18} />} text="Settings" />
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <header className="flex h-20 items-center justify-between border-b border-white/10 px-8">
          <div>
            <h2 className="text-xl font-semibold">
              Premier League Analytics
            </h2>
            <p className="text-sm text-gray-500">
              Transfer &amp; performance intelligence
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Search className="cursor-pointer text-gray-400" size={20} />
            <Bell className="cursor-pointer text-gray-400" size={20} />
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 font-semibold">
              A
            </div>
          </div>
        </header>

        <section className="p-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <StatCard title="Total Clubs" value="20" subtitle="Premier League" />
            <StatCard title="Players" value="520+" subtitle="Tracked players" />
            <StatCard title="Transfers" value="180+" subtitle="Current window" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-[#111119] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Premier League Table
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Current standings
                  </p>
                </div>
                <span className="text-xs text-purple-400">2026/27</span>
              </div>

              <div className="space-y-3">
                <TeamRow position="1" team="Arsenal" played="5" points="13" />
                <TeamRow position="2" team="Liverpool" played="5" points="12" />
                <TeamRow position="3" team="Manchester City" played="5" points="11" />
                <TeamRow position="4" team="Chelsea" played="5" points="10" />
                <TeamRow position="5" team="Manchester United" played="5" points="9" />
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111119] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Recent Transfers</h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Sample transfer data
                  </p>
                </div>
                <ArrowLeftRight size={18} className="text-purple-400" />
              </div>

              <div className="space-y-4">
                <TransferRow player="Alexander Isak" from="Newcastle" to="Liverpool" fee="£120M" />
                <TransferRow player="Florian Wirtz" from="Leverkusen" to="Liverpool" fee="£116M" />
                <TransferRow player="Benjamin Šeško" from="RB Leipzig" to="Manchester United" fee="£74M" />
                <TransferRow player="Bryan Mbeumo" from="Brentford" to="Manchester United" fee="£65M" />
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-[#111119] p-6">
            <h3 className="text-lg font-semibold">Team Performance Trend</h3>
            <p className="mb-6 mt-1 text-xs text-gray-500">
              Illustrative performance index
            </p>

            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#22222d" />
                  <XAxis dataKey="match" stroke="#888" />
                  <YAxis domain={[0, 100]} stroke="#888" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#111119",
                      border: "1px solid #333",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="performance"
                    name="Performance"
                    stroke="#a855f7"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function NavItem({ icon, text, active = false }) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition ${
        active
          ? "bg-purple-600/20 text-purple-400"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function StatCard({ title, value, subtitle }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111119] p-6 transition hover:border-purple-500/40">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="mt-2 text-3xl font-bold">{value}</h3>
      <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}

function TeamRow({ position, team, played, points }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 py-2">
      <div className="flex items-center gap-4">
        <span className="w-4 text-xs text-gray-500">{position}</span>
        <span className="text-sm font-medium">{team}</span>
      </div>
      <div className="flex items-center gap-8 text-xs text-gray-400">
        <span>{played} P</span>
        <span className="font-semibold text-white">{points} pts</span>
      </div>
    </div>
  );
}

function TransferRow({ player, from, to, fee }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 py-3">
      <div>
        <p className="text-sm font-medium">{player}</p>
        <p className="mt-1 text-xs text-gray-500">
          {from} → {to}
        </p>
      </div>
      <span className="text-sm font-semibold text-green-400">{fee}</span>
    </div>
  );
}

export default App;
