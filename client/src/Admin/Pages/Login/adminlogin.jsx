import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="flex h-screen  w-full items-center justify-center bg-gray-300 dark:bg-gray-950">
      <Card className="p-10 w-full max-w-md border-4 border-black h-4/6">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Enter your credentials to access the admin dashboard.
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/transcation" className="w-full">
              <Button className="w-full" type="submit">
                Login
              </Button>
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
