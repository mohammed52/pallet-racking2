import { DEFAULT_SETTINGS } from "../containers/helpers/defaultSettings";

const initialState = {
  projectSettings: {
    racksDescription: "",
    companyName: "",
    projectTitle: "",
    currentMetalPrices: 135
  },
  frame: {
    frameHeight: "",
    frameQty: "",
    frameDepth: ""
  },
  bays: [
    {
      length: "",
      qty: "",
      levels: "",
      loadPerLevel: ""
    },
    {
      length: "",
      qty: "",
      levels: "",
      loadPerLevel: ""
    },
    {
      length: "",
      qty: "",
      levels: "",
      loadPerLevel: ""
    },
    {
      length: "",
      qty: "",
      levels: "",
      loadPerLevel: ""
    }
  ],
  shelfType: "noShelf",
  createdAt: new Date(),
  _id: null,
  margin: 10
};

const newPalletRackProjectSpecs = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default newPalletRackProjectSpecs;
