import React from 'react'

type ITopNotification = {
  notification: string
}

const TopNotification: React.FC<ITopNotification> = ({ notification }) => (
  <div className="w=screen flex items-center justify-center text-2xs h-6 md:h-10 md:text-base notification_gradient">
    <div className="font-subtitleFont">{notification}</div>
  </div>
)

export default TopNotification
