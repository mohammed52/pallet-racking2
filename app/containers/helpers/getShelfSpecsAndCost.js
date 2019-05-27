// import { getMaxRackCapacityReqd } from './getMaxRackCapacityReqd'
// import { getMaxLevelCapacity } from './getMaxLevelCapacity'
// import { UprightWeightTable } from './WeightCapacityTables'
// import {generateLog } from './generateLog' 
import { getQtyOfShelves } from './getQtyOfShelves'

export function getShelfSpecsAndCost(rackingRequirements) {

  const MAPLOG = false

  var shelfSpecsAndCost = {
    description: "",
    unitWeight: 0,
    qty: 0
  };

  let weightPerSqInch = 0;
  let tmpDescription = ""
  const size = rackingRequirements.frame.frameDepth + "feet x 1feet x ";
  const shelfTotalQty = getQtyOfShelves(rackingRequirements)

  if (rackingRequirements.shelfType == "metalShelf1.0mm") {
    weightPerSqInch = 0.005512407
    tmpDescription = "Metal Shelf " + size + "1.0mm"

  } else if (rackingRequirements.shelfType == "metalShelf1.2mm") {
    weightPerSqInch = 0.006299894
    tmpDescription = "Metal Shelf " + size + "1.2mm"

  } else if (rackingRequirements.shelfType == "metalShelf1.5mm") {
    weightPerSqInch = 0.007874867
    tmpDescription = "Metal Shelf " + size + "1.5mm"
  } else if (rackingRequirements.shelfType == "metalShelf2.0mm") {
    weightPerSqInch = 0.009843584
    tmpDescription = "Metal Shelf " + size + "2.0mm"
  }

  const frameDepth = rackingRequirements.frame.frameDepth


  let shelfUnitWeight = 16 * (frameDepth * 12 + 4) * weightPerSqInch

  shelfSpecsAndCost.description = tmpDescription
  shelfSpecsAndCost.unitWeight = shelfUnitWeight
  shelfSpecsAndCost.qty = shelfTotalQty

  if (MAPLOG) console.log("shelfSpecsAndCost", shelfSpecsAndCost);
  return shelfSpecsAndCost
}