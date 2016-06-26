//TODO: Please write code in this file.
function printInventory(inputs) {
    //获取商品全部信息
    var allGoodsInfo = loadAllItems();
    //拆分商品信息
    var buyedItems = buyedItem(inputs);
    //统计购买的商品数量
    var itemCount = _.countBy(buyedItems);
    //获取商品具体信息
    var buyedItemsInfo = getItemsInfo(itemCount,allGoodsInfo);
    //获取赠品
    var promotions = loadPromotions();
    //计算小计内容
    var tipInfo = getBuyedTipInfo(buyedItemsInfo, promotions);
    //获取购买物品的优惠信息
    var giftItem = getGiftItem(tipInfo);
    //绘制输出信息
    printInfo(tipInfo,giftItem);
}

function buyedItem(inputs) {
    var buyedItem = [];

    _.forEach(inputs, function(n){
        if(n.indexOf('-') != -1){
            var itemName = n.split('-')[0];
            var itemCount = n.split('-')[1];
            for(var i=0; i< itemCount;i++){
                buyedItem.push(itemName);
            }
        }else {
            buyedItem.push(n);
        }

    });
    return buyedItem;
    /*for(var i=0; i<inputs.length; i++){
        if(!inputs[i].indexof('-')){
            if(!object[inputs[i]]){
                object[inputs[i]] = 1;
            }else {
                object[inputs[i]]++;
            }
        }else {
            var objectArray = inputs[i].split('-');
            object[objectArray[0]] = parseInt(objectArray[1]);
        }
    }
    for(var i in object){
        result.push({barcode: i,count: object[i]})
    }
    console.log('getCount: '+result);
    return result;*/
}

//获取商品具体信息
function getItemsInfo(itemCount, allGoodsInfo) {
    var buyedItemsInfo = [];
    for(x in itemCount){
        _.map(allGoodsInfo,function(n){
            if(x == n.barcode){
                n.count = itemCount[x];
                buyedItemsInfo.push(n)
            }
        })
    }
    return buyedItemsInfo;
}

//计算小计信息
function getBuyedTipInfo(buyedItemsInfo, promotions){
    var promotionsType = promotions[0].barcodes;
    var buyedTipInfo = _.forEach(buyedItemsInfo,function(n){
        if(promotionsType.indexOf(n.barcode)!=-1){
            n.promotionCount = Math.floor((n.count)/3);
        }else {
            n.promotionCount = 0;
        }
        n.totalPrice = n.price*n.count;
        n.promotionPrice = n.price*n.promotionCount;
        n.tipPrice = n.totalPrice - n.promotionPrice;
    });
    return buyedTipInfo;
}

function getGiftItem(tipInfo){
    var giftItem = [];
    for(var i=0; i<tipInfo.length; i++){
        if(tipInfo[i].promotionCount != 0){
            giftItem.push(tipInfo[i]);
        }
    }
    return giftItem;
}

function printInfo(tipInfo, giftInfo){
    var infoString = "***<没钱赚商店>购物清单***\n";
    var giftString = "----------------------\n" +"挥泪赠送商品：\n"
    var totalPrice = 0;
    var PromotionNum = 0;
    for (var i = 0; i < tipInfo.length; i++) {
        infoString += "名称："+tipInfo[i].name+"，数量："+tipInfo[i].count+tipInfo[i].unit;
        infoString += "，单价："+tipInfo[i].price.toFixed(2)+"(元)，小计："+tipInfo[i].tipPrice.toFixed(2)+"(元)\n";
        totalPrice += tipInfo[i].totalPrice;
        PromotionNum += tipInfo[i].promotionPrice;
    }
    finalPay = totalPrice - PromotionNum;
    for (var i = 0; i < giftInfo.length; i++) {
        giftString += "名称："+giftInfo[i].name+"，数量："+giftInfo[i].prompCount+giftInfo[i].unit+"\n";
    }
    infoString += giftString;
    infoString += "----------------------\n";
    infoString += "总计："+finalPay.toFixed(2)+"(元)\n";
    infoString += "节省："+PromotionNum.toFixed(2)+"(元)\n";
    infoString += "**********************"
    console.log(infoString);
}