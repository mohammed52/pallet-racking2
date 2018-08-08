import { apiEndpoint } from "../../config/app";
import createRestApiClient from "../utils/createRestApiClient";

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint //apiEndpoint is http://localhost:5000
  });
  return {
    uploadFiles: () =>
      client.request({
        method: "POST",
        url: "/api/uploadfiles"
      })
  };
};
