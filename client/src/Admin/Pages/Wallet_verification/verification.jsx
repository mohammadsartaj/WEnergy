import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Grid2X2Icon,
  User2Icon,
  VerifiedIcon,
  UserCog,
  BadgeIndianRupee,
} from "lucide-react";

function SideNav() {
  return (
    <nav className="mt-0 flex flex-col top-0 bg-[#1a1a2e] text-white w-64 h-screen  p-4 overflow-auto">
      <div className="text-2xl font-bold mb-12 mt-3">Admin</div>
      <ul className="mt-6 pt-6 space-y-12">
        <li>
          <a
            href="/transcation"
            className="flex items-center hover:text-gray-400"
          >
            <Grid2X2Icon className="mr-2" /> Dashboard
          </a>
        </li>
        <li>
          <a
            href="/walletverify"
            className="flex items-center hover:text-gray-400"
          >
            <VerifiedIcon className="mr-2" /> Verification
          </a>
        </li>
        <li>
          <a href="/userlist" className="flex items-center hover:text-gray-400">
            <User2Icon className="mr-2" /> Users
          </a>
        </li>
        <li>
          <a href="/emplist" className="flex items-center hover:text-gray-400">
            <UserCog className="mr-2" /> Employee List
          </a>
        </li>
        <li>
          <a
            href="/adminbill"
            className="flex items-center hover:text-gray-400"
          >
            <BadgeIndianRupee className="mr-2" /> Billing
          </a>
        </li>
        <li className="py-4">
          <a
            href="/adminlogin"
            className="hover:text-gray-700 p-4 border-2 border-white rounded-lg bg-slate-300 text-black font-bold"
          >
            Sign Out
          </a>
        </li>
      </ul>
    </nav>
  );
}

function V() {
  return (
    <div className="min-h-screen w-full bg-slate-400 ">
      <header className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white rounded-t-2xl">
        <div className="text-2xl font-bold">Wallet Requests</div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              className="rounded-md bg-[#2c2c4c] px-8 py-2 text-sm focus:outline-none"
              placeholder="Search requests..."
              type="text"
            />
          </div>
          <Button size="sm" variant="secondary">
            Refresh
          </Button>
        </div>
      </header>
      <div className="overflow-x-auto h-full w-full  bg-slate-400   border-[#3c3c5c] bg-[#2c2c4c]">
        <Table className="font-bold py-6 mt-12">
          <TableHeader>
            <TableRow className="mb-6 font-semibold text-slate-900">
              <TableHead className="font-semibold text-slate-800">
                User
              </TableHead>
              <TableHead className="font-semibold text-slate-800">
                Wallet Address
              </TableHead>
              <TableHead className="font-semibold text-slate-800">
                Status
              </TableHead>
              <TableHead className="font-semibold text-slate-800">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>John Doe</div>
                </div>
              </TableCell>
              <TableCell>0x123456789abcdef0123456789abcdef</TableCell>
              <TableCell>
                <Badge
                  className="rounded-md px-2 py-1 text-sm"
                  variant="secondary"
                >
                  Pending
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="primary">
                    Approve
                  </Button>
                  <Button size="sm" variant="danger">
                    Deny
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>Jane Doe</div>
                </div>
              </TableCell>
              <TableCell>0x987654321fedcba9876543210fedcba</TableCell>
              <TableCell>
                <Badge
                  className="rounded-md px-2 py-1 text-sm"
                  variant="success"
                >
                  Approved
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button disabled size="sm" variant="primary">
                    Approve
                  </Button>
                  <Button disabled size="sm" variant="danger">
                    Deny
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>Bob Smith</div>
                </div>
              </TableCell>
              <TableCell>0xfedcba9876543210fedcba9876543210</TableCell>
              <TableCell>
                <Badge
                  className="rounded-md px-2 py-1 text-sm"
                  variant="danger"
                >
                  Denied
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button disabled size="sm" variant="primary">
                    Approve
                  </Button>
                  <Button disabled size="sm" variant="danger">
                    Deny
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>Jane Doe</div>
                </div>
              </TableCell>
              <TableCell>0x987654321fedcba9876543210fedcba</TableCell>
              <TableCell>
                <Badge
                  className="rounded-md px-2 py-1 text-sm"
                  variant="success"
                >
                  Approved
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button disabled size="sm" variant="primary">
                    Approve
                  </Button>
                  <Button disabled size="sm" variant="danger">
                    Deny
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>Bob Smith</div>
                </div>
              </TableCell>
              <TableCell>0xfedcba9876543210fedcba9876543210</TableCell>
              <TableCell>
                <Badge
                  className="rounded-md px-2 py-1 text-sm"
                  variant="danger"
                >
                  Denied
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button disabled size="sm" variant="primary">
                    Approve
                  </Button>
                  <Button disabled size="sm" variant="danger">
                    Deny
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>John Doe</div>
                </div>
              </TableCell>
              <TableCell>0x123456789abcdef0123456789abcdef</TableCell>
              <TableCell>
                <Badge
                  className="rounded-md px-2 py-1 text-sm"
                  variant="secondary"
                >
                  Pending
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="primary">
                    Approve
                  </Button>
                  <Button size="sm" variant="danger">
                    Deny
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default function Component() {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1 w-full items-center justify-center h-screen">
        <V />
      </main>
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
