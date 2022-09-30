import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './styles.css'

const DataFlow = () => {
  const myViz = useRef()
  useEffect(() => {
    const width = window.innerWidth * 0.95
    const height = window.innerHeight * 0.8
    const margin = { top: 10, right: 10, bottom: 10, left: 10 }

    // Can remove after done building
    const svg = d3.select(myViz.current)
    svg.select('*').remove()
    svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

    // City data
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
      .attr('x', width * 0.009)
      .attr('y', height * 0.045)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('cities.csv')

    // City Names
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
      .text('names.csv')

    // Stats summary
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
      .text('stats.csv')

    // GraphContainer.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.75)
      .attr('cy', height * 0.1)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#3d348b')
    svg
      .append('text')
      .attr('x', width * 0.68)
      .attr('y', height * 0.05)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('GraphContainer.jsx')

    // CharPrepper.jsx
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

    // DataFlow.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.2)
      .attr('cy', height * 0.95)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ff4b3e')
    svg
      .append('text')
      .attr('x', width * 0.168)
      .attr('y', height * 0.899)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('DataFlow.jsx')

    // NextSteps.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.35)
      .attr('cy', height * 0.95)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ff4b3e')
    svg
      .append('text')
      .attr('x', width * 0.318)
      .attr('y', height * 0.899)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('NextSteps.jsx')

    // Header.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.55)
      .attr('cy', height * 0.95)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ff4b3e')
    svg
      .append('text')
      .attr('x', width * 0.518)
      .attr('y', height * 0.899)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('Header.jsx')

    // Nav.jsx
    svg
      .append('circle')
      .attr('cx', width * 0.75)
      .attr('cy', height * 0.95)
      .attr('r', 35)
      .attr('stroke', 'black')
      .attr('fill', '#ff4b3e')
    svg
      .append('text')
      .attr('x', width * 0.718)
      .attr('y', height * 0.899)
      .attr('stroke', 'black')
      .style('font-size', 15)
      .text('Nav.jsx')

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
    <div className='dataFlow'>
      <svg ref={myViz}></svg>
    </div>
  )
}
export default DataFlow
