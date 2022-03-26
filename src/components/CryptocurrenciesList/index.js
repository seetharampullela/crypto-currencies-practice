// Write your JS code here
import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptocurrenciesData} = this.props
    return (
      <div className="crypto-list-container">
        <div className="crypto-list-header">
          <h1 className="coin-type">Coin Type </h1>
          <div className="crypto-right-header">
            <p className="currency-value-ele">USD</p>
            <p className="currency-value-ele">EURO</p>
          </div>
        </div>
        <ul>
          {cryptocurrenciesData.map(each => (
            <CryptocurrencyItem cryptoItem={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default CryptocurrenciesList
