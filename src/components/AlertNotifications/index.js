// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const alertNotifications = [
  {
    iconComponent: <AiFillCheckCircle className="success-icon" />,
    id: 1,
    alert: 'You can access all the files in the folder',
    alertName: 'Success',
    colorClass: 'success',
  },
  {
    iconComponent: <RiErrorWarningFill className="error-icon" />,
    id: 2,
    alert: 'Sorry, you are not authorized to have access to delete the file',
    alertName: 'Error',
    colorClass: 'error',
  },
  {
    iconComponent: <MdWarning className="warning-icon" />,
    id: 3,
    alert: 'Viewers of this file can see comments and suggestions',
    alertName: 'Warning',
    colorClass: 'warning',
  },
  {
    iconComponent: <MdInfo className="info-icon" />,
    id: 4,
    alert: 'Anyone on the internet can view these files',
    alertName: 'Info',
    colorClass: 'info',
  },
]

const AlertNotifications = () => {
  console.log('alert Notifications')
  return (
    <div className="alert-cont">
      <h1 className="heading">Alert Notifications</h1>
      <ul className="alert-items">
        {alertNotifications.map(each => (
          <Notification key={each.id}>{each}</Notification>
        ))}
      </ul>
    </div>
  )
}

export default AlertNotifications
