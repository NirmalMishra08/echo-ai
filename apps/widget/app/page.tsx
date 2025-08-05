"use client"
import { useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"

export default function Page() {
  const users = useQuery(api.users.getUser)
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">app/turbo</h1>
        <div className="max-w-sm w-full mx-auto gap-y-4 ">
          <h2 className="text-lg">Users:{JSON.stringify(users, null, 2)}</h2>
        </div>

      </div>
    </div>
  )
}
