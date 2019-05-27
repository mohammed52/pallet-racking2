
// import UprightWeightTable from './WeightCapacityTables'
// import getMaxBayWeightCapacityReqd from './getMaxBayWeightCapacityReqd'

export function getMaxNoOfLevels(bays){
  // console.log(bays)
  let levels=0;

	bays.forEach(function(bay) {
		if(bay.levels>levels) levels=bay.levels;
  });

  return levels
}