import ChartPrepper from '../chartPrepper/ChartPrepper'
import FitContainer from './FitContainer'
import './styles.css'

const GraphContainer = ({ city }) => {
  let fit = null
  let no_fit = null
  let cityInfo = null
  let data = null
  if (city) {
    const bigObject = ChartPrepper(city)
    fit = bigObject[0].category
    no_fit = bigObject[1].category
    cityInfo = bigObject[2]
    data = bigObject[3]
  }

  return (
    <>
      <h1 className='city_title'>{city}</h1>
      <div className='box'>
        <div className='fit'>
          <h4>Resembles other cities</h4>
          <FitContainer
            categories={fit}
            cityInfo={cityInfo}
            data={data}
            city={city}
          />
        </div>
        <div className='no_fit'>
          <h4>Doesn't resembles other cities</h4>
          <FitContainer
            categories={no_fit}
            cityInfo={cityInfo}
            data={data}
            city={city}
          />
        </div>
      </div>
    </>
  )
}

export default GraphContainer
