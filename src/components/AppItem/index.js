// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-container">
      <img src={imageUrl} className="image-size" alt={appName} />
      <p className="app-name">{appName} </p>
    </li>
  )
}

export default AppItem
