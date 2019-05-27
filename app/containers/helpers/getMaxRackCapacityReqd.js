
// import UprightWeightTable from './WeightCapacityTables'
// import getMaxBayWeightCapacityReqd from './getMaxBayWeightCapacityReqd'

export function getMaxRackCapacityReqd(bays){
  // console.log(bays)
  let maxCapacity=0;
  bays.forEach
  bays.forEach(function(bay) {
    if(bay.levels*bay.loadPerLevel>maxCapacity)maxCapacity=bay.levels*bay.loadPerLevel;
	});
  return maxCapacity
}