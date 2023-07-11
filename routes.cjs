const { Router } = require("@edgio/core")
const fetch = require("node-fetch")

const router = new Router()
    .match("/:path*", ({ compute }) => {
        compute(async (req, res) => {
            const fetchRes = await fetch("https://www.google.com")
            const data = await fetchRes.text()
            res.body = data
        })
    })

module.exports = router
