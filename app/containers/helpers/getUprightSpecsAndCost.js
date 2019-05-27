import { getMaxRackCapacityReqd } from './getMaxRackCapacityReqd'
import { getMaxLevelCapacity } from './getMaxLevelCapacity'
import { UprightWeightTable } from './WeightCapacityTables'
// import {generateLog } from './generateLog' 

export function getUprightSpecsAndCost(rackingRequirements){
	
	const MAPLOG = false
	
	const maxRackCapacity = getMaxRackCapacityReqd(rackingRequirements.bays)
	const maxLevelCapacity = getMaxLevelCapacity(rackingRequirements.bays)
	
	// if(mapLog) console.log(UprightWeightTable)	
	// if(mapLog)console.log();
	if(MAPLOG)console.log("UprightWeightTable", UprightWeightTable);
	if(MAPLOG)console.log("maxLevelCapacity", maxLevelCapacity, "maxRackCapacity", maxRackCapacity)
	var selectedUpright;
	for (var i = 0; i < UprightWeightTable.length; i++) {
		if((UprightWeightTable[i].maxCapacityPerLevel>=maxLevelCapacity && 
			UprightWeightTable[i].maxCapacityPerRack>=maxRackCapacity) || (i==UprightWeightTable.length-1)) {
			selectedUpright = UprightWeightTable[i];
		break;
		}
	}

	if(MAPLOG)console.log("rackingRequirements",rackingRequirements);
	if(MAPLOG)console.log("selectedUpright",selectedUpright);
	
	const description = "Upright: "+selectedUpright.upright;
	// const UOM = "kgs"
	const unitWeight = rackingRequirements.frame.frameHeight * selectedUpright.weightPerFoot
	const qty = rackingRequirements.frame.frameQty*2

	const uprightSpecsAndTotalWeight = {
		description: description, 
		unitWeight: unitWeight,
		qty: qty}

	if(MAPLOG)console.log("uprightSpecsAndTotalWeight: ", uprightSpecsAndTotalWeight);

	return uprightSpecsAndTotalWeight
}