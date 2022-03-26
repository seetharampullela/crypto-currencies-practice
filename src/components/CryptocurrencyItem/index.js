// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {currencyLogoUrl, currencyName, euroValue, usdValue} = cryptoItem

  return (
    <li className="crypto-list-item">
      <img
        src={currencyLogoUrl}
        alt={currencyName}
        className="crypto-logo-img"
      />
      <div className="crypto-right-elements">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
