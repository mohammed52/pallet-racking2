import {BeamConnectorTable} from './WeightCapacityTables'

export function getBeamConnectorSpecsAndCost(index, bay){
	
	const MAPLOG = false
	var beamConnectorSpecsAndCost = {description: "",
							unitWeight: 0,
							qty: 0};
	if(MAPLOG)console.log("bay",bay);
	if(MAPLOG)console.log("BeamConnectorTable",BeamConnectorTable);
	for (var i = 0; i < BeamConnectorTable.length; i++) {
		if(BeamConnectorTable[i].capacityPerLevel>=bay.loadPerLevel){
			beamConnectorSpecsAndCost.description="Connector-"+(index+1)+": "+BeamConnectorTable[i].connector
			beamConnectorSpecsAndCost.unitWeight = BeamConnectorTable[i].weight
			beamConnectorSpecsAndCost.qty = bay.qty*bay.levels*2*2
			break
		}
	}
	if(MAPLOG)console.log("beamConnectorSpecsAndCost",beamConnectorSpecsAndCost);
	return beamConnectorSpecsAndCost
}