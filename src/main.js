//TODO: Please write code in this file.

var list=[
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
];


function printInventory(inputs) {
    getCount(list);
}

//统计商品数量
function getCount(inputs) {
    var object = {};
    var result = [];
    //计算每个选项的数量

    for(var i=0; i<inputs.length; i++){
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
    return result;
}

//转换为具体的数值
function changeToItems(itemCount, itemInfo) {
    var result =[];
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
    console.log('changeToItem');
    return result;
}

//