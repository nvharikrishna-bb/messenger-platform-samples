var dict = {};
setKey = function(userId , key, value) {
		if(typeof userId == 'undefined')
			return {};
		if (typeof key == 'undefined')
			return {};
		if(typeof dict[userId] == 'undefined')
			dict[userId] = {};
		typeof value == 'undefined' ? '' : value;
		dict[userId][key] = value;
};

getKey= function(userId , key) {
		if(typeof userId == 'undefined' || typeof key == 'undefined' || typeof dict[userId] == 'undefined')
			return "";
  		return typeof dict[userId][key] == 'undefined' ? "" : dict[userId][key];
};
	
module.exports.getKey = getKey;
module.exports.setKey = setKey;