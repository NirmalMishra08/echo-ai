import { mutation, query } from "./_generated/server"


export const getUser = query({
  args: {},
  handler: async (ctx) => {
    const user = await ctx.db.query("users").collect();
    return user
  },
})

export const ad = mutation(
  {
    args: {},
    handler: async (ctx) => {

      const identity = await ctx.auth.getUserIdentity();
      if (identity === null) {
        throw new Error("Not authenticated");
      }

      const orgId = identity.orgId as string
      if (!orgId) {
        throw new Error("No organization found for this user");
      }

      const user = await ctx.db.insert("users", {
        name: "John Doe",
        email: "Jondoe@gmail.com",
        createdAt: Date.now(),
      })

      return user;
    },
  })