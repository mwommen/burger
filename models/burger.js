const orm  = require('../config/orm');

const burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', cb);
    }
};

module.exports = burger;