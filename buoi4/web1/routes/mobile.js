var express   = require('express');
var router = express.Router();
var Mobile = require( '../models/Mobile');

router.get('/', (req, res) =>{ 
//gui du lieu sang frontend
var text = "Mobile evolution"
var year = 2023
    //render ra view index, hbs nam trong thu muc views/mobile
res.render('mobile/index', {chu : text, so : year})

})

router.get('/list', (req, res) =>{ 
    
    var mobile1 = new Mobile(1, "Iphone","'https://www.expertreviews.co.uk/sites/expertreviews/files/2022/09/apple_iphone_14_review_0.jpg'")
    var mobile2 = new Mobile(2, "Samsung","'https://images.samsung.com/is/image/samsung/assets/vn/2208/pfs/01-hd02-B4-kv-pc-1440x640.jpg?imwidth=1366'")
    var mobile3 = new Mobile(3, "Oppo","'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6-pro-5g-oversea/listpage/Phone-List-product-list-Grey-427-x-600.png.thumb.webp'")
    var mobileList = [mobile1, mobile2, mobile3]
    
res.render('mobile/list', { mobiles: mobileList })
})



module.exports = router;