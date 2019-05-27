// import { getMaxRackCapacityReqd } from './getMaxRackCapacityReqd'
// import { getMaxLevelCapacity } from './getMaxLevelCapacity'
// import { UprightWeightTable } from './WeightCapacityTables'
// import {generateLog } from './generateLog' 

export function getQtyOfShelves(rackingRequirements){
	
	const MAPLOG = false
	let totalShelfQty=0

	for (var i = 0; i < rackingRequirements.bays.length; i++) {
		const bay = rackingRequirements.bays[i]
		let shelfsPerBay = Math.floor(bay.length)*bay.levels*bay.qty
		totalShelfQty+=shelfsPerBay
	}
	
	if(MAPLOG)console.log("totalShelfQty",totalShelfQty);
	return totalShelfQty
}