import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav>
                <Link to={'/'}>
                    Home
                </Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}