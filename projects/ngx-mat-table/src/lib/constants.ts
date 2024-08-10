export const CONFIG_DATA = [
    {
        label : 'Category Name',
        key_name : 'name',
        renderer:(keyName:string,data:any)=>{if (data.hasOwnProperty(keyName)){return data[keyName]}}
    },
    {
        label : 'Store Address',
        key_name : 'store_addr',
        renderer:(keyName:string,data:any)=>{if (data.hasOwnProperty(keyName)){return data[keyName]}}
    },
    {
        label : 'Pincode',
        key_name : 'pincode',
        renderer:(keyName:string,data:any)=>{if (data.hasOwnProperty(keyName)){return data[keyName]}}
    },
    {
        label : 'Country',
        key_name : 'country',
        renderer:(keyName:string,data:any)=>{if (data.hasOwnProperty(keyName)){return data[keyName]}}
    }
]

export const DATA_VALUE = [
    {
        name:'Luxe',
        store_addr:'123,New Admin street,Jrcc',
        pincode:'CM1788',
        country:'INDIA'
    },
    {
        name:'Luxe-Premium',
        store_addr:'125,New Admin street,New York',
        pincode:'CM1788',
        country:'USA'
    }
    {
        name:'Luxe',
        store_addr:'45,New Admin street,Canada',
        pincode:'CM1788',
        country:'CANADA'
    }
    {
        name:'Luxe',
        store_addr:'77,New Admin street,Malaysia',
        pincode:'CM1788',
        country:'MALAYSIA'
    }
]