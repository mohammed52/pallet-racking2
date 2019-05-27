import { getMaxRackCapacityReqd } from './getMaxRackCapacityReqd'
import { getMaxLevelCapacity } from './getMaxLevelCapacity'
import { UprightWeightTable } from './WeightCapacityTables'
import {BoxBeamWeightCapacityTable} from './WeightCapacityTables'
import {BeamWeightPerFootTable} from './WeightCapacityTables'
// import {generateLog } from './generateLog' 

export function getBeamSpecsAndCost(index, bay){
	
	const MAPLOG = false
	var beamSpecsAndCost={description: "",
							unitWeight: 0,
							qty: 0};
	// if(MAPLOG)console.log("BoxBeamWeightCapacityTable",BoxBeamWeightCapacityTable)
	// if(MAPLOG){console.log("bay",bay)}
		
	var selectedBeamIndex;
	for(var i=0; i<BoxBeamWeightCapacityTable.beamLengths.length; i++){
		if(BoxBeamWeightCapacityTable.beamLengths[i]>=bay.length){
			selectedBeamIndex=i;
			break
		}
	}
	
	if(MAPLOG)console.log("bay",bay);
	// if(MAPLOG)console.log("selectedBeamIndex",selectedBeamIndex);
	// if(MAPLOG)console.log("selectedBeamIndex",selectedBeamIndex);

	for (var j = 0; j < BoxBeamWeightCapacityTable.table.length; j++) {
		if(BoxBeamWeightCapacityTable.table[j][selectedBeamIndex+1]>0.95*bay.loadPerLevel){
			// if(MAPLOG)console.log("BoxBeamWeightCapacityTable.table[j][selectedBeamIndex+1]",BoxBeamWeightCapacityTable.table[j][selectedBeamIndex+1]);	
			// if(MAPLOG)console.log("BoxBeamWeightCapacityTable.table[j][0]",BoxBeamWeightCapacityTable.table[j][0]);
			// if(MAPLOG)console.log("BeamWeightPerFootTable[j].weightPerFoot",BeamWeightPerFootTable[j].weightPerFoot);
			beamSpecsAndCost.description = "Beam-"+(index+1)+": "+BoxBeamWeightCapacityTable.table[j][0]
			beamSpecsAndCost.unitWeight = BeamWeightPerFootTable[j].weightPerFoot*bay.length
			beamSpecsAndCost.qty = bay.levels*2*bay.qty
			break
		}
	}
	
	if(MAPLOG)console.log("beamSpecsAndCost",beamSpecsAndCost);

	return beamSpecsAndCost
}