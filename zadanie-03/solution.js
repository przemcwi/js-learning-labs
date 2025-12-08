function groupProducts(products){

    if(!Array.isArray(products)) return [];

    const grouped = products.reduce((acc, product) => {
    const cat = product.category.toLowerCase(); 
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(product);
    return acc;
    }, {});

    const result = Object.entries(grouped).map(([category, items]) => {
        const count = items.length;
        const averagePrice = Number(
            (items.reduce((acc, item) => {
            return acc + item.price;
        }, 0) / count).toFixed(2)
        );

        return {
            category,
            count,
            averagePrice
        }
    })

    result.sort((a, b) => b.averagePrice - a.averagePrice);

    return result
};

module.exports = groupProducts;
