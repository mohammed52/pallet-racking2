import { DEFAULT_SETTINGS } from "../containers/helpers/defaultSettings";

const initialState = {
  projectSettings: {
    racksDescription: "20x9x3",
    companyName: "MEK",
    projectTitle: "Korangi Warehouse",
    currentMetalPrices: 130
  },
  frame: {
    frameHeight: "20",
    frameQty: "12",
    frameDepth: "3"
  },
  bays: [
    {
      length: "9",
      qty: "10",
      levels: "5",
      loadPerLevel: "2000"
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
