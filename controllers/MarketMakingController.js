const router = Router()
router.post("/findCases", (req, res) => {
    MarketMakingModel.findCases(
        req.body.exchange1BackRate,
        req.body.exchange1LayRate,
        req.body.exchange2BackRate,
        req.body.exchange2LayRate,
        res.callback
    )
})
export default router
