export function generateLog(boolVal, strName) {
    
    if (boolVal) {
		return function(strName2){
			console.log(strName+': '+strName2);
		}				
    } else {
		return function(strName2){
			// do nothing
		}
    }
}