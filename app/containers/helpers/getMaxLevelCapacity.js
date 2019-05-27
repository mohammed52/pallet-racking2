
// import UprightWeightTable from './WeightCapacityTables'
// import getMaxBayWeightCapacityReqd from './getMaxBayWeightCapacityReqd'

export function getMaxLevelCapacity(bays){
  // console.log(bays)
  let maxLevelCapacity=0;

	bays.forEach(function(bay) {
		if(bay.loadPerLevel>maxLevelCapacity) maxLevelCapacity=bay.loadPerLevel;
  });

  return maxLevelCapacity
}