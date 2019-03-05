export default {
    findCases: function(
        exchange1BackRate,
        exchange1LayRate,
        exchange2BackRate,
        exchange2LayRate,
        callback
    ) {
        if (
            exchange1LayRate < exchange1BackRate &&
            exchange2LayRate < exchange2BackRate
        ) {
            callback("Wrong Entry, Lay can not be less than Back.")
        } else if (
            exchange1BackRate == exchange2BackRate &&
            exchange1LayRate < exchange2LayRate
        ) {
            callback(null, 1)
        } else if (
            exchange1BackRate > exchange2BackRate &&
            exchange1LayRate == exchange2LayRate
        ) {
            callback(null, 2)
        } else if (
            exchange1BackRate > exchange2BackRate &&
            exchange1LayRate < exchange2LayRate
        ) {
            callback(null, 3)
        } else if (
            exchange1BackRate < exchange2BackRate &&
            exchange1LayRate > exchange2LayRate
        ) {
            callback(null, 4)
        } else if (
            exchange1BackRate > exchange2BackRate &&
            exchange1BackRate < exchange2LayRate &&
            exchange1LayRate > exchange2LayRate
        ) {
            callback(null, 5)
        } else if (
            exchange1BackRate < exchange2BackRate &&
            exchange1LayRate > exchange2BackRate &&
            exchange1LayRate < exchange2LayRate
        ) {
            callback(null, 6)
        } else if (exchange1LayRate == exchange2BackRate) {
            callback(null, 7)
        } else if (exchange1BackRate == exchange2LayRate) {
            callback(null, 8)
        } else if (
            exchange1BackRate == exchange2BackRate &&
            exchange1LayRate == exchange2LayRate
        ) {
            callback(null, 9)
        } else if (exchange1LayRate < exchange2BackRate) {
            callback(null, 10)
        } else if (exchange2LayRate < exchange1BackRate) {
            callback(null, 11)
        } else if (
            exchange1BackRate < exchange2BackRate &&
            exchange1LayRate == exchange2LayRate
        ) {
            callback(null, 12)
        } else if (
            exchange1BackRate == exchange2BackRate &&
            exchange1LayRate > exchange2LayRate
        ) {
            callback(null, 13)
        } else {
            callback("Un-Handled Condition")
        }
    }
}
