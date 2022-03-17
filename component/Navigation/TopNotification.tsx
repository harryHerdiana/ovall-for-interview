import React from 'react'

type ITopNotification = {
  notification: string
  className?: string
}

const TopNotification: React.FC<ITopNotification> = ({ notification, className }) => (
  <div
    className={`${className} w=screen flex items-center justify-center text-2xs h-6 md:h-8 md:text-base notification_gradient`}>
    <div className="font-subtitleFont">{notification}</div>
  </div>
)

export default TopNotification
