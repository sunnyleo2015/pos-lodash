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
    var promitions = loadPromotions();
    //计算赠品
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
    var buyedItemInfo = [];
    for(x in itemCount){
        _.map(allGoodsInfo,function(n){
            if(x == n.barcode){
                n.count = itemCount[x];
                buyedItemInfo.push(n)
            }
        })
    }
    return buyedItemInfo;
}

//计算优惠
function itemsPromotion(buyedItemInfo, promotionInfo){
    var result = [];
    //判断商品类型

    //
}