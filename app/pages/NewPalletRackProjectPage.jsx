import React, { Component } from "react";
import Page from "../pages/Page";
import NewPalletRackProjectContainer from "../containers/NewPalletRackProjectContainer";

class NewPalletRackProductPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return "New Pallet Rack Project Page";
  };

  pageMeta = () => {
    return [
      {
        name: "description",
        content: "generate a list of application documents required by YMTM"
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <NewPalletRackProjectContainer {...this.props} />
      </Page>
    );
  }
}

export default NewPalletRackProductPage;
