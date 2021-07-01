import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
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
        ({ data: result } = await moviesApi.movieDetail(parseId));
      } else {
        ({ data: result } = await tvApi.tvDetail(parseId));
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

export default DetailContainer;
