import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const DataFlow = () => {
  const myViz = useRef()
  useEffect(() => {
    const width = window.innerWidth * 0.95
    const height = window.innerHeight * 0.8
    const margin = { top: 10, right: 10, bottom: 10, left: 10 }

    // Can remove after done building
    const svg = d3
      .select(myViz.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

    // cities.csv to LoadData.jsx
    svg
      .append('line')
      .attr('x1', width * 0.01)
      .attr('y1', height * 0.05)
      .attr('x2', width * 0.25)
      .attr('y2', height * 0.43)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    //  stats.csv to LoadStats.jsx
    svg
      .append('line')
      .attr('x1', width * 0.03)
      .attr('y1', height * 0.17)
      .attr('x2', width * 0.14)
      .attr('y2', height * 0.5)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // names.csv to Selector.jsx
    svg
      .append('line')
      .attr('x1', width * 0.135)
      .attr('y1', height * 0.065)
      .attr('x2', width * 0.42)
      .attr('y2', height * 0.27)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // LoadStats.jsx to ChartPrepper.js
    svg
      .append('line')
      .attr('x1', width * 0.14)
      .attr('y1', height * 0.5)
      .attr('x2', width * 0.25)
      .attr('y2', height * 0.6)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // LoadData.jsx to ChartPrepper.js
    svg
      .append('line')
      .attr('x1', width * 0.25)
      .attr('y1', height * 0.43)
      .attr('x2', width * 0.25)
      .attr('y2', height * 0.6)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // FindCategories.jsx to ChartPrepper.js
    svg
      .append('line')
      .attr('x1', width * 0.12)
      .attr('y1', height * 0.68)
      .attr('x2', width * 0.25)
      .attr('y2', height * 0.6)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // ChartPrepper.js to GraphContainer.jsx
    svg
      .append('line')
      .attr('x1', width * 0.25)
      .attr('y1', height * 0.6)
      .attr('x2', width * 0.5)
      .attr('y2', height * 0.4)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // Selector.jsx to GraphContainer.jsx
    svg
      .append('line')
      .attr('x1', width * 0.42)
      .attr('y1', height * 0.27)
      .attr('x2', width * 0.5)
      .attr('y2', height * 0.4)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // GraphContainer.jsx to FitContainer.jsx
    svg
      .append('line')
      .attr('x1', width * 0.5)
      .attr('y1', height * 0.4)
      .attr('x2', width * 0.6)
      .attr('y2', height * 0.3)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // FitContainer.jsx to Graph.jsx
    svg
      .append('line')
      .attr('x1', width * 0.6)
      .attr('y1', height * 0.3)
      .attr('x2', width * 0.72)
      .attr('y2', height * 0.2)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // Graph.jsx to getText.js
    svg
      .append('line')
      .attr('x1', width * 0.72)
      .attr('y1', height * 0.2)
      .attr('x2', width * 0.84)
      .attr('y2', height * 0.14)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // GraphContainer.jsx to Nav.jsx
    svg
      .append('line')
      .attr('x1', width * 0.5)
      .attr('y1', height * 0.4)
      .attr('x2', width * 0.58)
      .attr('y2', height * 0.65)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // DataFlow.jsx to Nav.jsx
    svg
      .append('line')
      .attr('x1', width * 0.4)
      .attr('y1', height * 0.77)
      .attr('x2', width * 0.58)
      .attr('y2', height * 0.65)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // NextSteps.jsx to Nav.jsx
    svg
      .append('line')
      .attr('x1', width * 0.58)
      .attr('y1', height * 0.85)
      .attr('x2', width * 0.58)
      .attr('y2', height * 0.65)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // Nav.jsx to App.js
    svg
      .append('line')
      .attr('x1', width * 0.58)
      .attr('y1', height * 0.65)
      .attr('x2', width * 0.95)
      .attr('y2', height * 0.5)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // Header.jsx to App.js
    svg
      .append('line')
      .attr('x1', width * 0.74)
      .attr('y1', height * 0.75)
      .attr('x2', width * 0.95)
      .attr('y2', height * 0.5)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // styles.css to App.js
    svg
      .append('line')
      .attr('x1', width * 0.92)
      .attr('y1', height * 0.8)
      .attr('x2', width * 0.95)
      .attr('y2', height * 0.5)
      .attr('stroke', '#009fb7')
      .style('stroke-width', 3)

    // cities.csv
    svg
      .append('rect')
      .attr('x', width * 0.01)
      .attr('y', height * 0.05)
      .attr('width', width * 0.04)
      .attr('height', height * 0.05)
      .attr('stroke', 'black')
      .attr('fill', '#aaabbc')
    svg
      .append('text')
      .attr('x', width * 0.002)
      .attr('y', height * 0.045)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('cities.csv')

    // stats.csv
    svg
      .append('rect')
      .attr('x', width * 0.03)
      .attr('y', height * 0.17)
      .attr('width', width * 0.04)
      .attr('height', height * 0.05)
      .attr('stroke', 'black')
      .attr('fill', '#aaabbc')
    svg
      .append('text')
      .attr('x', width * 0.022)
      .attr('y', height * 0.165)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('stats.csv')

    // names.csv
    svg
      .append('rect')
      .attr('x', width * 0.135)
      .attr('y', height * 0.065)
      .attr('width', width * 0.04)
      .attr('height', height * 0.05)
      .attr('stroke', 'black')
      .attr('fill', '#aaabbc')
    svg
      .append('text')
      .attr('x', width * 0.125)
      .attr('y', height * 0.06)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('names.csv')

    // GraphContainer.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.5)
      .attr('cy', height * 0.4)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#3d348b')
    svg
      .append('text')
      .attr('x', width * 0.43)
      .attr('y', height * 0.35)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('GraphContainer.jsx')

    // Selector.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.42)
      .attr('cy', height * 0.27)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#3d348b')
    svg
      .append('text')
      .attr('x', width * 0.38)
      .attr('y', height * 0.22)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('Selector.jsx')

    // FitContainer.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.6)
      .attr('cy', height * 0.3)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#3d348b')
    svg
      .append('text')
      .attr('x', width * 0.55)
      .attr('y', height * 0.25)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('FitContainer.jsx')

    // Graph.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.72)
      .attr('cy', height * 0.2)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#3d348b')
    svg
      .append('text')
      .attr('x', width * 0.69)
      .attr('y', height * 0.15)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('Graph.jsx')

    // getText.js
    svg
      .append('circle')
      .attr('cx', width * 0.84)
      .attr('cy', height * 0.14)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#3d348b')
    svg
      .append('text')
      .attr('x', width * 0.81)
      .attr('y', height * 0.09)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('getText.js')

    // ChartPrepper.js
    svg
      .append('circle')
      .attr('cx', width * 0.25)
      .attr('cy', height * 0.6)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ffb20f')
    svg
      .append('text')
      .attr('x', width * 0.2)
      .attr('y', height * 0.545)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('ChartPrepper.js')

    // LoadStats.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.14)
      .attr('cy', height * 0.5)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ffb20f')
    svg
      .append('text')
      .attr('x', width * 0.09)
      .attr('y', height * 0.45)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('LoadStats.jsx')

    // LoadData.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.25)
      .attr('cy', height * 0.43)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ffb20f')
    svg
      .append('text')
      .attr('x', width * 0.2)
      .attr('y', height * 0.38)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('LoadData.jsx')

    // FindCategories.js
    svg
      .append('circle')
      .attr('cx', width * 0.12)
      .attr('cy', height * 0.68)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ffb20f')
    svg
      .append('text')
      .attr('x', width * 0.06)
      .attr('y', height * 0.63)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('FindCategories.js')

    // Nav.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.58)
      .attr('cy', height * 0.65)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ff4b3e')
    svg
      .append('text')
      .attr('x', width * 0.55)
      .attr('y', height * 0.6)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('Nav.jsx')

    // DataFlow.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.4)
      .attr('cy', height * 0.77)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ff4b3e')
    svg
      .append('text')
      .attr('x', width * 0.36)
      .attr('y', height * 0.72)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('DataFlow.jsx')

    // NextSteps.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.58)
      .attr('cy', height * 0.85)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ff4b3e')
    svg
      .append('text')
      .attr('x', width * 0.53)
      .attr('y', height * 0.8)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('NextSteps.jsx')

    // Header.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.74)
      .attr('cy', height * 0.75)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ff4b3e')
    svg
      .append('text')
      .attr('x', width * 0.7)
      .attr('y', height * 0.7)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('Header.jsx')

    // styles.css
    svg
      .append('circle')
      .attr('cx', width * 0.92)
      .attr('cy', height * 0.8)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ff4b3e')
    svg
      .append('text')
      .attr('x', width * 0.885)
      .attr('y', height * 0.749)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('styles.css')

    // App.js
    svg
      .append('circle')
      .attr('cx', width * 0.95)
      .attr('cy', height * 0.5)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#009fb7')
    svg
      .append('text')
      .attr('x', width * 0.93)
      .attr('y', height * 0.449)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('App.js')
  }, [])
  return (
    <div className='container svg'>
      <p>
        This application was built with React and D3. Considerable work was put
        in beforehand to prepare the data.
      </p>
      <svg ref={myViz}></svg>
    </div>
  )
}
export default DataFlow
