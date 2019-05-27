export function removeZeroValueBays(bays) {
	const MAPLOG = false;
	if (MAPLOG) console.log("bays", bays);
	var retArray = bays.slice();
	if (MAPLOG) console.log(retArray);
	var indexesToRemove = [];

	for (var i = 0; i < bays.length; i++) {
		var indexShouldRemove = false;

		Object.keys(bays[i]).forEach(key => {
			if (bays[i][key] === 0) {
				indexShouldRemove = true;
			}
		});
		if (indexShouldRemove == true) indexesToRemove.push(i);
	}

	for (var j = indexesToRemove.length - 1; j >= 0; j--)
		retArray.splice(indexesToRemove[j], 1);

	if (MAPLOG) console.log("indexesToRemove", indexesToRemove);
	if (MAPLOG) console.log("retArray", retArray);

	return retArray;
}
