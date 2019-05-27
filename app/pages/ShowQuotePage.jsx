import React, { Component } from "react";
import Page from "../pages/Page";
import ShowQuoteContainer from "../containers/ShowQuoteContainer";

class ShowQuotePage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return "Show Quote Page";
  };

  pageMeta = () => {
    return [
      {
        name: "description",
        content: "show pallet rack quote"
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <ShowQuoteContainer {...this.props} />
      </Page>
    );
  }
}

export default ShowQuotePage;
