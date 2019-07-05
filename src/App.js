import React, { Component } from 'react';
import axios from 'axios';
import MovieCards from './components/MovieCards';
import jsonData from './data.json';

const TRAILER_URL = "https://api.myjson.com/bins/69x4b";
class App extends Component {
  state = {
    loading: true,
    data: [],
    showData: [],
    prevValue: 0,
    nextValue: 10
  }
  componentDidMount() {
    this.fetchData();
    window.addEventListener('scroll', this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }
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
  fetchData = async () => {
    try {
      let result = await axios.get(TRAILER_URL);
      let dataDisplay = Object.values(result.data[1]);
      this.setState({
        data: dataDisplay, showData: dataDisplay.slice(this.state.prevValue,
          this.state.nextValue), loading: false
      })
    }
    catch (e) {
      console.log("e", e)
    }
  }
  render() {
    if (this.state.loading) return <>Loading...</>;
    console.log(this.state.showData);
    return (
      <div className="ml-2 mr-2">
        <MovieCards movies={this.state.showData} />
      </div>
    );
  }
}

export default App;
