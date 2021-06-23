import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parseId = Number(id);
    if (isNaN(parseId)) {
      push("/");
      return;
    }
    let result;
    try {
      if (isMovie) {
        // movie 찾음
        const request = await moviesApi.movieDetail(parseId);
        result = request.data;
      } else {
        const request = await tvApi.tvDetail(parseId);
        result = request.data;
      }
      console.log(result);
    } catch (error) {
      this.setState({ error: "Cant find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
