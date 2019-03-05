var userData = [
    {
        req: {
            exchange1BackRate: 8,
            exchange1LayRate: 9,
            exchange2BackRate: 8,
            exchange2LayRate: 5
        },
        response: {}
    },
    {
        exchange1BackRate: 8,
        exchange1LayRate: 9,
        exchange2BackRate: 8,
        exchange2LayRate: 10
    },
    {
        exchange1BackRate: 6,
        exchange1LayRate: 8,
        exchange2BackRate: 4,
        exchange2LayRate: 8
    },
    {
        exchange1BackRate: 4,
        exchange1LayRate: 6,
        exchange2BackRate: 2,
        exchange2LayRate: 8
    },
    {
        exchange1BackRate: 2,
        exchange1LayRate: 8,
        exchange2BackRate: 4,
        exchange2LayRate: 6
    },
    {
        exchange1BackRate: 5,
        exchange1LayRate: 9,
        exchange2BackRate: 2,
        exchange2LayRate: 7
    },
    {
        exchange1BackRate: 8,
        exchange1LayRate: 9,
        exchange2BackRate: 8,
        exchange2LayRate: 10
    }
]

describe("Market Making Controller API ", function() {
    it("0 case ", function(done) {
        chai.request(adminUrl + "MarketMaking")
            .post("/findCases")
            .send(userData[0])
            .end(function(err, res) {
                console.log("0 case ", res.body)
                if (res.statusCode == 200) done()
                else done()
            })
    })
    it("1 case ", function(done) {
        chai.request(adminUrl + "MarketMaking")
            .post("/findCases")
            .send(userData[1])
            .end(function(err, res) {
                console.log("1 case ", res.body)

                if (res.statusCode == 200) done()
                else done()
            })
    })
    it("2 case ", function(done) {
        chai.request(adminUrl + "MarketMaking")
            .post("/findCases")
            .send(userData[2])
            .end(function(err, res) {
                console.log("2 case ", res.body)

                if (res.statusCode == 200) done()
                else done()
            })
    })
    it("3 case ", function(done) {
        chai.request(adminUrl + "MarketMaking")
            .post("/findCases")
            .send(userData[3])
            .end(function(err, res) {
                console.log("3 case ", res.body)

                if (res.statusCode == 200) done()
                else done()
            })
    })
    it("4 case ", function(done) {
        chai.request(adminUrl + "MarketMaking")
            .post("/findCases")
            .send(userData[4])
            .end(function(err, res) {
                console.log("4 case ", res.body)

                if (res.statusCode == 200) done()
                else done()
            })
    })
    it("5 case ", function(done) {
        chai.request(adminUrl + "MarketMaking")
            .post("/findCases")
            .send(userData[5])
            .end(function(err, res) {
                console.log("5 case ", res.body)

                if (res.statusCode == 200) done()
                else done()
            })
    })
    it("6 case ", function(done) {
        chai.request(adminUrl + "MarketMaking")
            .post("/findCases")
            .send(userData[6])
            .end(function(err, res) {
                console.log("6 case ", res.body)

                if (res.statusCode == 200) done()
                else done()
            })
    })
    it("7 case ", function(done) {
        chai.request(adminUrl + "MarketMaking")
            .post("/findCases")
            .send(userData[7])
            .end(function(err, res) {
                console.log("7 case ", res.body)

                if (res.statusCode == 200) done()
                else done()
            })
    })
    it("8 case ", function(done) {
        chai.request(adminUrl + "MarketMaking")
            .post("/findCases")
            .send(userData[8])
            .end(function(err, res) {
                console.log("8 case ", res.body)

                if (res.statusCode == 200) done()
                else done()
            })
    })
    it("9 case ", function(done) {
        chai.request(adminUrl + "MarketMaking")
            .post("/findCases")
            .send(userData[9])
            .end(function(err, res) {
                console.log("9 case ", res.body)

                if (res.statusCode == 200) done()
                else done()
            })
    })
})
