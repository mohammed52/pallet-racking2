import { getMaxRackCapacityReqd } from './getMaxRackCapacityReqd'
import { getMaxLevelCapacity } from './getMaxLevelCapacity'
import { UprightWeightTable } from './WeightCapacityTables'
// import {generateLog } from './generateLog' 

export function getBasePlateSpecsAndCost(rackingRequirements){
	
	const MAPLOG = false
	var basePlateSpecsAndCost = {description: "",
							unitWeight: 0,
							qty: 0};

	basePlateSpecsAndCost.description="Square Base Plate 3mm"
	basePlateSpecsAndCost.unitWeight = 0.85
	basePlateSpecsAndCost.qty = rackingRequirements.frame.frameQty*2
	
	
	return basePlateSpecsAndCost
}