import { getMaxRackCapacityReqd } from './getMaxRackCapacityReqd'
import { getMaxLevelCapacity } from './getMaxLevelCapacity'


import { BracingTable } from './WeightCapacityTables'
// import {generateLog } from './generateLog' 

export function getBracingSpecsAndCost(rackRequirements) {

  const MAPLOG = false
  var bracingSpecsAndCost = {
    description: "",
    unitWeight: 0,
    qty: 0
  };
  const maxRackCapacity = getMaxRackCapacityReqd(rackRequirements.bays)
  const maxLevelCapacity = getMaxLevelCapacity(rackRequirements.bays)

  // if(MAPLOG)console.log("BracingTable",BracingTable);
  for (var i = 0; i < BracingTable.length; i++) {
    if (BracingTable[i].maxCapacityPerLevel >= maxLevelCapacity &&
      BracingTable[i].maxCapacityPerRack >= maxRackCapacity) {

      bracingSpecsAndCost.description = "Bracing: " + BracingTable[i].bracing;
      bracingSpecsAndCost.unitWeight = BracingTable[i].weightPerFoot * rackRequirements.frame.frameHeight * 2.5
      bracingSpecsAndCost.qty = Math.ceil(rackRequirements.frame.frameQty)
      break

    }
  }
  if (MAPLOG) console.log("bracingSpecsAndCost", bracingSpecsAndCost);
  return bracingSpecsAndCost
}