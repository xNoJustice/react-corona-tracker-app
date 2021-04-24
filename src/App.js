import React, { Component } from "react";
import Cards from "./components/Cards";
import CountryPicker from "./components/CountryPicker";
import Chart from "./components/Chart";
import { fetchData } from "./api";
import logo from "./logo.png";
class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    return (
      <div>
        <div className="flex justify-center items-center dark:bg-gray-200 mx-auto rounded-full mb-4">
          <img src={logo} alt="logo" />
        </div>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
