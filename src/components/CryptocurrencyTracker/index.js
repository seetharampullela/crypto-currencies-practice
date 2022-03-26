// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrenciesData: [], isLoading: true}

  componentDidMount() {
    this.getcryptocurrenciesData()
  }

  getcryptocurrenciesData = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyLogoUrl: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    // console.log(updatedData)
    this.setState({cryptocurrenciesData: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrenciesData, isLoading} = this.state

    return (
      <div className="crypto-bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptocurrency-bg-img"
            />
            <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
