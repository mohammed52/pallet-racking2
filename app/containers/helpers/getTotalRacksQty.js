import { getMaxRackCapacityReqd } from './getMaxRackCapacityReqd'
import { getMaxLevelCapacity } from './getMaxLevelCapacity'
import { UprightWeightTable } from './WeightCapacityTables'
// import {generateLog } from './generateLog' 

export function getTotalRacksQty(rackingRequirements){
	
	const MAPLOG = false
	var nutBoltSpecsAndCost = {description: "",
							unitWeight: 0,
							qty: 0};
	
	let totalRackQty=0
	
	for (var i = 0; i < rackingRequirements.bays.length; i++) {
		totalRackQty+=rackingRequirements.bays[i].qty
	}

	return totalRackQty
}