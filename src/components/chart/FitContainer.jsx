import Graph from './Graph'

const get_cat_numbers = (cat, data) => {
  let numbers = []
  for (let i in data) {
    numbers.push(data[i][cat])
  }
  return numbers
}

const FitContainer = ({ categories, cityInfo, data, city }) => {
  let category_data = []
  for (let i in categories) {
    let cat = categories[i]
    let cat_data = []
    cat_data.push(get_cat_numbers(cat, data))
    category_data.push(cat_data)
  }
  if (category_data) {
    return (
      <div>
        {category_data.map((data, i) => (
          <div className='graph-container' key={i}>
            <h4>
              {categories[i]}: {cityInfo[categories[i]]}
            </h4>
            <Graph
              category={categories[i]}
              data={data}
              cityInfo={cityInfo}
              city={city}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default FitContainer
