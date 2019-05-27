export function getMaxBeamLength(bays){
  // console.log(bays)
  let maxBayLength=0;

	bays.forEach(function(bay) {
		if(bay.length>maxBayLength) maxBayLength=bay.length;
  });

  return maxBayLength
}