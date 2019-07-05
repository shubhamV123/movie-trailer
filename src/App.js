import React, { Component } from 'react';
import MovieCards from './components/MovieCards';
import jsonData from './data.json';
import { Container } from 'reactstrap';
import './App.css'
const FILTERED_DATA = Object.values(jsonData[1])
class App extends Component {
  state = {
    loading: true,
    data: FILTERED_DATA,
    showData: FILTERED_DATA.slice(0, 10),
    prevValue: 0,
    nextValue: 10,
    width: 0,
    height: 0,
    activeColCount: 4
  }
  componentDidMount() {

    this.updateWindowDimensions();
    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  //Check which devices are we
  updateWindowDimensions = () => {
    let { activeColCount } = this.state;
    if (window.innerWidth >= 992 && activeColCount !== 4) {

      this.setState({ activeColCount: 4 })
    }
    if ((window.innerWidth >= 768 && window.innerWidth < 992) && activeColCount !== 3) {
      this.setState({ activeColCount: 3 })
    }
    if ((window.innerWidth >= 576 && window.innerWidth < 768) && activeColCount !== 2) {
      this.setState({ activeColCount: 2 })
    }
    if ((window.innerWidth < 576) && activeColCount !== 1) {
      this.setState({ activeColCount: 1 })
    }


  }
  //Append data on scroll(feasible infinite scroll[if data comes from api])[dont eat all browser memory :-)]
  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.state.showData.length !== this.state.data.length
    ) {
      let updatedPrevValue = this.state.prevValue + 10;
      let updatedNextValue = this.state.nextValue + 10;
      let appendData = [...this.state.showData, ...this.state.data.slice(updatedPrevValue, updatedNextValue)];
      this.setState({ prevValue: updatedPrevValue, nextValue: updatedNextValue, showData: appendData })
    }
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Movie Trailer</h1>
        <Container>
          <MovieCards movies={this.state.showData} activeColCount={this.state.activeColCount} />
        </Container>
      </div>
    );
  }
}

export default App;
