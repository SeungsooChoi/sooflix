import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };
  // 컴포넌트가 마운트 되었을 때 nowPlaying, upcoming, popular를 찾고 state 설정
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();

      const {
        data: { results: popular },
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch (error) {
      this.setState({ error: "Cant find movie information" });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  // api 및 error 처리

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
