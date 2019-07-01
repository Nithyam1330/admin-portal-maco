
// @params
// searchArray : array which need to be searched
// searchValue : value which need to be searched in the Array
// searchBasedValue: which parameters of array need to be searched (Array need to be passed)
export function searchFilterArrayOfJson(searchArray, searchValue, searchBasedValue) {
    const filteredArray = [];
    for (let j = 0; j < searchBasedValue.length; j++) {
        for (let i = 0; i <= searchArray.length - 1; i++) {
            const temp = searchArray[i][searchBasedValue[j]].toLowerCase();
            const splitArray = temp.split(searchValue.toLowerCase());
            if (splitArray.length > 1) {
                filteredArray.push(searchArray[i]);
            } else {
                if (splitArray[0].length !== temp.length) {
                    filteredArray.push(searchArray[i]);
                }
            }
        }
    }
    return filteredArray;
}
