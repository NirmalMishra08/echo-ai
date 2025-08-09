"use client"
import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import { mutation } from "@workspace/backend/_generated/server"
import { Authenticated, Unauthenticated } from "convex/react"
import { SignInButton , SignUpButton, UserButton } from "@clerk/nextjs"
import { LogOut } from "lucide-react"

export default function Page() {
  const users = useQuery(api.users.getUser)
  const addUser = useMutation(api.users.ad)

  const handleAddUser = async () => {
    try {
      await addUser()
      // Optionally, you can refetch the users after adding a new one
    } catch (error) {
      console.error("Error adding user:", error)
    }
  }
  return (
    <>
    <Authenticated>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">app/web</h1>
          <UserButton/>
          <div className="max-w-sm w-full mx-auto gap-y-4 ">
            <Button onClick={handleAddUser}> Add user </Button>
            <h2 className="text-lg">Users:{JSON.stringify(users, null, 2)}</h2>
          </div>

        </div>
      </div>
    </Authenticated>
    <Unauthenticated>
      <div>Must be Authenticated</div>
      <div className="flex items-center justify-center gap-4">
        <SignInButton mode="modal">Sign In</SignInButton>
        <SignUpButton mode="modal">Sign Up</SignUpButton>
        
      </div>
    </Unauthenticated>
    </>
  )
}
