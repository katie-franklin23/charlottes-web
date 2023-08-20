import footerData from '../data/footer'

function Footer() {
  return (
    <div className="footer">
      <h1>
        {footerData.author}, {footerData.copyright}
      </h1>
    </div>
  )
}

export default Footer
