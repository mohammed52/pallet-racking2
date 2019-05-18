import { DEFAULT_SETTINGS } from "../containers/helpers/defaultSettings";

const initialState = {
  projectSettings: {
    racksDescription: "10x4x5, 3level, 1000kgs/lvl",
    companyName: "MEK",
    projectTitle: "Yamaha Project",
    currentMetalPrices: 90
  },
  frame: {
    frameHeight: "12",
    frameQty: "2",
    frameDepth: "3"
  },
  bays: [
    {
      length: "9",
      qty: "1",
      levels: "3",
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
