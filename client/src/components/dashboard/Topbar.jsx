import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Topbar() {
  return (
    <div className="h-20 border-b border-white/10 flex items-center justify-between px-10">

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-4 top-4 text-gray-400"
        />

        <input
          placeholder="Search..."
          className="w-full rounded-xl bg-white/5 border border-white/10 py-3 pl-11 pr-4 outline-none"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer" />

        <Avatar>

          <AvatarFallback>
            SS
          </AvatarFallback>

        </Avatar>

      </div>

    </div>
  );
}