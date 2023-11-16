const express = require('express')
const { shopController } = require('../controllers/shop.controller.js')

/*
	router: /shop
*/

const shopRouter = express.Router()

shopRouter.get('/', shopController.renderShopPage)

shopRouter.get('/cart', shopController.renderCartPage)

shopRouter.post('/cart', shopController.buyProduct)

module.exports = {
	shopRouter,
}