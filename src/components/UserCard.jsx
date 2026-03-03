import React from "react"

const UserCard = ({ user }) => {
    return (
        <>
            <p>
                <span>Name:</span>
                <span>{user?.name || ''}</span>
            </p>
            {user?.age && <p>
                <span>Age:</span>
                <span>{user.age}</span>
            </p>}
            {user?.country && <p>
                <span>Country:</span>
                <span>{user.country}</span>
            </p>}
            {user?.['job-role'] && <p>
                <span>Job Role:</span>
                <span>{user['job-role']}</span>
            </p>}
        </>
    )
}

export default React.memo(UserCard)