const doc = document;
const productsSelector = ".products";

renderProduct(products[0], productsSelector);
renderProduct(products[1], productsSelector);
renderProduct(products[2], productsSelector);
renderProduct(products[3], productsSelector);

function renderProduct(prodObj, insertSelector) {
  const parentEl = doc.querySelector(insertSelector);
  const product = doc.createElement("div"),
    productImgWrap = doc.createElement("div"),
    productImg = doc.createElement("img"),
    productTitle = doc.createElement("h3"),
    ProductPriceBlock = doc.createElement("div"),
    productPrice = doc.createElement("span"),
    addCart = doc.createElement("button"),
    productCategory = doc.createElement("span");


    const {id, title,  category, img, price} = prodObj;
    const imgPath = `./img/${category}/${img}`;

  if (!parentEl) {
    console.error(`[${insertSelector}]: Parent element found!!!`);
    return false;
  }

        product.className = "product";
        product.dataset.id = id;


        productImgWrap.className = "product-img";
        productImg.src = `./img/${img}`;
        productImg.alt = "laptop1";
        productImgWrap.append(productImg);


        productTitle.className = "product-title";
        product.innerHTML = "Prod1";


        ProductPriceBlock.className = "product-price-block";
        productPrice.className = "product-price";
        product.innerHTML = 1000;
        ProductPriceBlock.append(productPrice, addCart);


        addCart.className = "add-cart";
        addCart.innerHTML = "add cart";


        productCategory.className = "product-category";
        productCategory.innerText = "Laptops";


        product.append(
            productImgWrap,
            productTitle,
            ProductPriceBlock,
            productCategory
        );

        parentEl.append(product);
        }

        console.log(renderProduct());
