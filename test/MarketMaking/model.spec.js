describe("Market Making Controller API", function() {
    it("Case 1", function() {
        MarketMakingModel.findCases(8, 9, 8, 10, function(err, data) {
            if (err) done(err)
            else {
                assert.equal(data, 1)
                done(null, data)
            }
        })
    })
    // it("Case 2", function(done) {
    //     MarketMakingModel.findCases(9, 8, 8, 10, function(err, data) {
    //         if (err) done(err)
    //         else {
    //             expect(data).to.equal(1)
    //             done(null, data)
    //         }
    //     })
    // })
})
