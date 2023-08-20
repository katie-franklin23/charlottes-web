import headerData from '../data/header'
import IMAGES from '../Images/Images'

function Header() {
  return (
    <div className="header">
      <img src={IMAGES.image} />
      <h1>{headerData.title}</h1>
    </div>
  )
}

export default Header
