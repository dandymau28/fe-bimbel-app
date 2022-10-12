import { useState } from "react"

const Dashboard = () => {
    const [getToken, setToken] = useState(localStorage.getItem('access_token') || '')

    return (
        <>
            <p>Welcome, {getToken}</p>
        </>
    )
}

export default Dashboard