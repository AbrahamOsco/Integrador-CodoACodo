const express = require('express')
const shopRouter = express.Router()

const shopController  = require('../controllers/shopControllers.js')

shopRouter.get('/', shopController.renderShopPage)

shopRouter.get('/item/:productId', shopController.renderItemId)



module.exports = {
	shopRouter,
}


//shopRouter.get('/cart', shopController.renderCartPage)

//shopRouter.post('/cart', shopController.buyProduct)

/*
shopRouter.use((_req, res) => {
	res.status(404).send('Called /shop with wrong HTTP method or path')
})

*/