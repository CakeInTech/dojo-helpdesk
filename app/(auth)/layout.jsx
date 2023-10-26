import Link from "next/link"

function AuthLayout({children}) {
    return (
        <div>
            <nav>
                <h1>Dojo Helpdesk</h1>
                <Link href="/signup">Sign up</Link>
                <Link href="/login">Log in</Link>
            </nav>
            {children}
        </div>
    )
}

export default AuthLayout
