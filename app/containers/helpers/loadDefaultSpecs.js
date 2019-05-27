import React from 'react';
import {getMaxBeamLength} from './getMaxBeamLength'
import {getMaxLevelCapacity} from './getMaxLevelCapacity'
import {getMaxNoOfLevels} from './getMaxNoOfLevels'
import {getTotalRacksQty} from './getTotalRacksQty'

export function loadDefaultSpecs(descriptionArr, rackRequirements){
	
	const MAPLOG = true
	const rackHeight = rackRequirements.frame.frameHeight
	const rackDepth = rackRequirements.frame.frameDepth
	const rackLength = getMaxBeamLength(rackRequirements.bays)
	
	// push racks rows info
	const racksCount = getTotalRacksQty(rackRequirements)
	const rows = rackRequirements.frame.frameQty-racksCount
	descriptionArr.push(<span key={"span-racks-rows"}>{"-- Quote for "+racksCount+" Racks in "+rows+" rows"}</span>)
	descriptionArr.push(<br key={"descriptionArr"+"br"+3}/>)

	// push rack size info
	descriptionArr.push(<span key={"span-rackSize"}>{"-- Rack Size: "+rackHeight+"feet (H) x "+rackLength+"feet (L) x "+rackDepth+"feet (D)"}</span>)
	descriptionArr.push(<br key={"descriptionArr"+"br"+1}/>)
	
	const maxCapacity = getMaxLevelCapacity(rackRequirements.bays)
	const maxNoOfLevels = getMaxNoOfLevels(rackRequirements.bays)
	//push number of levels and weight capacity per level info
	descriptionArr.push(<span key={"span-levels-capacity"}>{"-- "+maxNoOfLevels+" levels per Rack, "+maxCapacity+"kgs per level"}</span>)
	descriptionArr.push(<br key={"descriptionArr"+"br"+2}/>)

	

	return descriptionArr
}