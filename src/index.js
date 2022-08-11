module.exports = function check(str, bracketsConfig) {

	let error = false;
	if (str.length !== 0 && bracketsConfig.length !== 0 && !(str.length % 2)) {
		for (let i = 0; i < bracketsConfig.length; i++) {
			if (Array.from(str.matchAll(new RegExp(`\\${bracketsConfig[i][0]}`, 'g'))).length !== Array.from(str.matchAll(new RegExp(`\\${bracketsConfig[i][1]}`, 'g'))).length) {
				error = true;
				console.log('pair ERROR');
				break;
			}
		}
		const regArr = bracketsConfig.map(el => new RegExp(`${/\d/.test(el[0]) ? '' : '\\'}${el[0]}${/\d/.test(el[0]) ? '' : '\\'}${el[1]}`, 'g'));
		let temp = '';
		for (let i = 0; i < regArr.length; i++) {
			temp = str.replaceAll(regArr[i], '');
			if (str.length !== temp.length) {
				str = temp;
				i = 0;
				i--;
			}
		}
		if (str.length !== 0) {
			error = true;
		}
	} else {
		error = true;
	}
	return !error;
}
