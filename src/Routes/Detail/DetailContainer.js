import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parseId = Number(id);
    if (isNaN(parseId)) {
      push("/");
      return;
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(this.props);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
