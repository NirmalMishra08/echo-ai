"use client"

import { useOrganization } from "@clerk/nextjs"
import { AuthLayout } from "../layout/auth.layout"
import { OrgSelectView } from "@/modules/auth/ui/views/org-select-view";


export const OrganisationGuard = ({ children }: { children: React.ReactNode }) => {
    const { organization } = useOrganization();

    if (!organization) {
        <AuthLayout>
           <OrgSelectView/>
        </AuthLayout>
    }
    return (
        <>
            {children}
        </>
    )
}