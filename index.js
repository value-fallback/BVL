module.exports = function bvl(value, fallbackValue) {
	return (typeof value === 'boolean') ? value : fallbackValue;
};
