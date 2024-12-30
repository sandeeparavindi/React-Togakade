export class Item{
    item_code:string;
    category : string;
    unit_price : number;
    qty : number;


    constructor(item_code:string, category : string, qty : number, unit_price : number) {
        this.item_code = item_code;
        this.category = category;
        this.unit_price = unit_price;
        this.qty = qty;
    }
}