// Write your code here
import {GrFormClose} from 'react-icons/gr'
// import {AiFillCheckCircle} from 'react-icons/ai'
// import {RiErrorWarningFill} from 'react-icons/ri'
// import {MdWarning, MdInfo} from 'react-icons/md'
import './index.css'

const Notification = props => {
  const {children} = props
  const {alert, alertName, colorClass, iconComponent} = children
  //   const getIconComponent = () => {
  //     console.log('get component')
  //     switch (iconComponent) {
  //       case 'AiFillCheckCircle':
  //         return <AiFillCheckCircle className="success-icon" />
  //       case 'RiErrorWarningFill':
  //         return <RiErrorWarningFill className="error-icon" />
  //       case 'MdWarning':
  //         return <MdWarning className="warning-icon" />
  //       case 'MdInfo':
  //         return <MdInfo className="info-icon" />

  //       default:
  //         return ''
  //     }
  //   }
  return (
    <li className="initial">
      {iconComponent}
      <div className="name-alert-close">
        <div className="name-alert">
          <h1 className={colorClass}>{alertName}</h1>
          <p className="alertNotify">{alert}</p>
        </div>
        <GrFormClose className="close-icon" />
      </div>
    </li>
  )
}

export default Notification
