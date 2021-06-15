'use strict';

var History = require('./History');

module.exports = FileHistory;

function FileHistory(data) {
	History.call(this, data);
}

FileHistory.prototype = Object.create(History.prototype);


FileHistory.prototype.addReport = function(report, date) {
	date = date || report.date || new Date().toUTCString();
	this.push({
		date: date,
		sloc: report.complexity.aggregateAverage.sloc.physical,
		lloc: report.complexity.aggregateAverage.sloc.logical,
		functions: report.complexity.functions.length,
		deliveredBugs: report.complexity.aggregateAverage.halstead.bugs,
		maintainability: report.complexity.maintainability,
		lintErrors: (report.eslint && report.eslint.messages.length) || [],
		difficulty: report.complexity.aggregateAverage.halstead.difficulty
	});
	return this;
};
