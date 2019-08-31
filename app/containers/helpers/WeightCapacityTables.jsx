export const UprightWeightTable = [
  {
    upright: "70x50x2mm",
    weightPerFoot: 0.75,
    maxCapacityPerRack: 3000,
    maxCapacityPerLevel: 600
  },
  {
    upright: "80x70x1.5mm",
    weightPerFoot: 0.79,
    maxCapacityPerRack: 6000,
    maxCapacityPerLevel: 1000
  },
  {
    upright: "80x70x2mm",
    weightPerFoot: 1.06,
    maxCapacityPerRack: 8000,
    maxCapacityPerLevel: 1500
  },
  {
    upright: "80x70x2.5mm",
    weightPerFoot: 1.32,
    maxCapacityPerRack: 10000,
    maxCapacityPerLevel: 2000
  },
  {
    upright: "80x70x3mm",
    weightPerFoot: 1.58,
    maxCapacityPerRack: 12000,
    maxCapacityPerLevel: 3000
  },
  {
    upright: "100x80x2mm",
    weightPerFoot: 1.71,
    maxCapacityPerRack: 14000,
    maxCapacityPerLevel: 3500
  },
  {
    upright: "100x80x2.5mm",
    weightPerFoot: 2.13,
    maxCapacityPerRack: 16000,
    maxCapacityPerLevel: 4000
  }
];

export const BeamConnectorTable = [
  {
    connector: "3 Hooks, 3mm",
    weight: 0.75,
    capacityPerLevel: 1000
  },
  {
    connector: "4 Hooks, 3mm",
    weight: 0.85,
    capacityPerLevel: 1500
  },
  {
    connector: "4 Hooks, 4mm",
    weight: 1.05,
    capacityPerLevel: 4000
  }
];

export const BeamWeightPerFootTable = [
  {
    boxBeamSize: "80x50x2mm",
    weightPerFoot: 1.27
  },
  {
    boxBeamSize: "100x50x2mm",
    weightPerFoot: 1.46
  },
  {
    boxBeamSize: "110x50x2mm",
    weightPerFoot: 1.56
  },
  {
    boxBeamSize: "120x50x2mm",
    weightPerFoot: 1.66
  },
  {
    boxBeamSize: "140x50x2mm",
    weightPerFoot: 1.76
  },
  {
    boxBeamSize: "150x50x2mm",
    weightPerFoot: 1.86
  },
  {
    boxBeamSize: "160x50x2mm",
    weightPerFoot: 1.95
  }
];

export const BoxBeamWeightCapacityTable = {
  beamLengths: [
    4.92,
    5.91,
    6.56,
    7.5,
    8.2,
    8.85,
    9.84,
    10.8,
    11.81,
    12.8,
    13.78
  ],
  table: [
    ["80x50x2mm", 3360, 2333, 1890, 1429, 1210, 1037, 840, 694, 569, 467, 383],
    [
      "100x50x2mm",
      4000,
      3928,
      3128,
      2406,
      2036,
      1746,
      1414,
      1169,
      959,
      786,
      645
    ],
    [
      "110x50x2mm",
      4000,
      4000,
      3870,
      2926,
      2477,
      2123,
      1720,
      1421,
      1165,
      955,
      783
    ],
    [
      "120x50x2mm",
      4000,
      4000,
      4000,
      3692,
      3125,
      2679,
      2170,
      1793,
      1470,
      1206,
      989
    ],
    [
      "140x50x2mm",
      4000,
      4000,
      4000,
      4000,
      4000,
      3854,
      3122,
      2580,
      2116,
      1735,
      1423
    ],
    [
      "150x50x2mm",
      4000,
      4000,
      4000,
      4000,
      4000,
      4000,
      3952,
      3266,
      2678,
      2196,
      1801
    ],
    [
      "160x50x2mm",
      4000,
      4000,
      4000,
      4000,
      4000,
      6593,
      5340,
      4413,
      3619,
      2967,
      2433
    ]
  ]
};

export const BracingTable = [
  {
    bracing: "25x25x1.0mm",
    maxCapacityPerLevel: 1000,
    maxCapacityPerRack: 3000,
    weightPerFoot: 0.313
  },
  {
    bracing: "25x25x1.2mm",
    maxCapacityPerLevel: 2000,
    maxCapacityPerRack: 5000,
    weightPerFoot: 0.374
  },
  {
    bracing: "25x25x1.5mm",
    maxCapacityPerLevel: 3000,
    maxCapacityPerRack: 9000,
    weightPerFoot: 0.469
  },
  {
    bracing: "25x25x2.0mm",
    maxCapacityPerLevel: 4000,
    maxCapacityPerRack: 30000,
    weightPerFoot: 0.625
  }
];
