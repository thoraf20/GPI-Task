

document.addEventListener('DOMContentLoaded' , getInventory());

async function getInventory() {
    let url = 'http://localhost:3001/api/inventory';
    try{
        let data = await fetch(url);
        const response = await data.json();
        renderInventory(response)
    } catch (error) {
        console.log(error);
    }
    
}

function renderInventory(data) {
    let html = '';
   

    data.forEach(item => {
        let htmlSection = `<div class="card">
                            <img src="http://www.textures4photoshop.com/tex/thumbs/seamless-paper-texture-business-card-background-thumb47.jpg" alt="" class="card__img"> 

                            <div class="card__data">
                            <h1 class="card__title">Name: ${item.item}</h1>
                            <h1 class="card__title">Price: #${item.price}</h1>
                            <h1 class="card__title">Sold: ${item.qty_sold}</h1>
                            <h1 class="card__title">Total Sales: #${item.total_sales}</h1>
                            <h1 class="card__title">In Stock: ${item.qty_in_stock}</h1>
                            </div>
                            </div>`;
            html +=  htmlSection;
    });
    let container = document.querySelector("#container");
    container.innerHTML = html;
}

