import { User } from "@/entities/user";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import Link from "next/link";

export interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card
      key={user.id}
      className=" shadow-lg rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-semibold text-center">
          {user.name}
        </CardTitle>
        <CardDescription className="text-sm text-center">
          {user.company.name} - {user.company.catchPhrase}
        </CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="block text-sm font-medium ">Email:</span>
          <span>{user.email}</span>
        </div>

        <div>
          <span className="block text-sm font-medium ">Phone:</span>
          <span>{user.phone}</span>
        </div>

        <div>
          <span className="block text-sm font-medium ">Website</span>
          <Link
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {user.website}
          </Link>
        </div>

        <div>
          <span className="block text-sm font-medium ">Address</span>
          <span>
            {user.address.suite}, {user.address.street}, {user.address.city},{" "}
            {user.address.zipcode}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
