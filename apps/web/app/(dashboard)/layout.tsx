import { AuthGuard } from "@/modules/auth/ui/components/authguard"
import { OrganisationGuard } from "@/modules/auth/ui/components/organisationGuard"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthGuard>
            <OrganisationGuard>
                {children}
            </OrganisationGuard>

        </AuthGuard>
    )
}

export default Layout