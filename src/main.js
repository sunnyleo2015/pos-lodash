//TODO: Please write code in this file.
function printInventory(inputs) {
}

//统计商品数量
function getCount(inputs) {
    var buyedItem = [];
    //计算每个选项的数量
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

//转换为具体的数值
function changeToItems(itemCount, itemInfo) {
    var result = [];
    for(var i=0; i<itemCount; i++){
        for(var j=0; j<itemInfo; j++){
            if(itemCount[i].barcode == itemInfo[j].barcode){
                result.push({
                            barcode: itemCount[i].barcode,
                            count:itemCount[i].count,
                            name: itemInfo[j].name,
                            unit: itemInfo[j].unit,
                            price: itemInfo[j].price
                            })
            }
        }
    }
    console.log('changeToItems');
    return result;
}

//计算优惠
function itemsPromotion(buyedItemInfo, promotionInfo){
    var result = [];
    //判断商品类型

    //
}