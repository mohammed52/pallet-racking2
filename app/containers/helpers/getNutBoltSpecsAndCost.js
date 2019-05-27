import { getMaxRackCapacityReqd } from './getMaxRackCapacityReqd'
import { getMaxLevelCapacity } from './getMaxLevelCapacity'
import { UprightWeightTable } from './WeightCapacityTables'
// import {generateLog } from './generateLog' 

export function getNutBoltSpecsAndCost(rackingRequirements){
	
	const MAPLOG = false
	var nutBoltSpecsAndCost = {description: "",
							unitWeight: 0,
							qty: 0};

	nutBoltSpecsAndCost.description="GI Hexagonal Nut Bolt"
	nutBoltSpecsAndCost.unitWeight = rackingRequirements.frame.frameHeight*0.15+2.2
	nutBoltSpecsAndCost.qty = rackingRequirements.frame.frameQty
	
	
	return nutBoltSpecsAndCost
}