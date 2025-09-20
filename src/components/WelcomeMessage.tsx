import React, { type FC } from 'react'
type welcomeprop = {
  isLogin: boolean,
  user?: {
    name: string;
    type: 'admin' | 'user' | 'guest'
  }
}
const WelcomeMessage: FC<welcomeprop> = ({ isLogin, user }) => {
  if (user && user.type === 'user') {
    return <p>Login User {user.name}</p>
  } else if (user && user.type === 'admin') {
    return <p>Admin {user.name}</p>
  } else {
    return <p>Login Guest {user?.name}</p>
}
}
export default WelcomeMessage