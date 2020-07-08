

let products = [
    {
        name: "LG TV",
        price: 139.99,
        imgSrc: "https://m.media-amazon.com/images/I/81NZaNRrvDL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "TV"
    },
    {
        name: "Proscan",
        price: 113.52,
        imgSrc: "https://m.media-amazon.com/images/I/81ePpa2skBL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "TV"
    },
    {
        name: "AXESS",
        price: 249.99,
        imgSrc: "https://m.media-amazon.com/images/I/917dmr5M+6L._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "TV"
    },
    {
        name: "TCL",
        price: 269.9,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71Hu+IEm5wL._AC._SR360,460.jpg",
        categories: "Electronics",
        subcategories: "Hometheatre"
    },
    {
        name: "Edifier",
        price: 124.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61ERzFR0xAL._AC._SR360,460.jpg",
        categories: "Electronics",
        subcategories: "Hometheatre"
    },
    {
        name: "ASUS ZenBook",
        price: 1298,
        imgSrc: "https://m.media-amazon.com/images/I/718LRbt7-CL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "laptops"
    },
    {
        name: "Lenovo flex",
        price: 632,
        imgSrc: "https://m.media-amazon.com/images/I/81iUtbasLNL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "laptops"
    },
    {
        name: "ASUS ZENBOOK FLIP",
        price: 999,
        imgSrc: "https://m.media-amazon.com/images/I/815ja6xiAGL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "laptops"
    },
    {
        name: "Acer",
        price: 139.09,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC._SR360,460.jpg",
        categories: "Electronics",
        subcategories: "Desktop"
    },
    {
        name: "Dell",
        price: 589,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81APuRplViL._AC._SR360,460.jpg",
        categories: "Electronics",
        subcategories: "Desktop"
    },
    {
        name: "UMIDIGI A3S",
        price: 230,
        imgSrc: "https://m.media-amazon.com/images/I/61jmey4Sa9L._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "Mobiles"
    },
    {
        name: "Easy fone",
        price: 99.99,
        imgSrc: "https://m.media-amazon.com/images/I/61Ga-hMUkwL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "Mobiles"
    },
    {
        name: "SAmsung Galaxy",
        price: 446,
        imgSrc: "https://m.media-amazon.com/images/I/61Ygdf5VvoL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "Mobiles"
    },
    {
        name: "UMIDIGI A3S",
        price: 129,
        imgSrc: "https://m.media-amazon.com/images/I/61X4JbzdIhL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "Mobiles"
    },
    {
        name: "UMIDIGI A3 CELL",
        price: 99.99,
        imgSrc: "https://m.media-amazon.com/images/I/619EPF1kBCL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "Mobiles"
    },
    {
        name: "SG-1100 Netgate pfSense Security Gateway Appliance",
        price: 299,
        imgSrc: "https://m.media-amazon.com/images/I/51HqR2jRoyL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "HOMEAPPLIANCES"
    },
    {
        name: "Power Cable",
        price: 8.95,
        imgSrc: "https://m.media-amazon.com/images/I/41Q16+YKJTL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "HOMEAPPLIANCES"
    },
    {
        name: "Emliviar",
        price: 169,
        imgSrc: "https://m.media-amazon.com/images/I/613wn5p1yEL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "HOMEAPPLIANCES"
    },
    {
        name: "BSEED US Plug Home",
        price: 63,
        imgSrc: "https://m.media-amazon.com/images/I/51Dfhpd3dBL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "HOMEAPPLIANCES"
    },
    {
        name: "Multi-Function Smart Power Plug",
        price: 34.99,
        imgSrc: "https://m.media-amazon.com/images/I/61EQp3B4qAL._AC_UY327_FMwebp_QL65_.jpg",
        categories: "Electronics",
        subcategories: "HOMEAPPLIANCES"
    }
    ,
    {
        name: "Maritime Naturals",
        price: 39.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/719m1J+bWxL._AC._SR360,460.jpg",
        categories: "HealthBeauty"

    },
    {
        name: "Bio-Oil Skincare Oil",
        price: 21.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71Oq4xkdhrL._AC._SR360,460.jpg",
        categories: "HealthBeauty"
    },
    {
        name: "Complex 15",
        price: 7.97,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71NzWcSTfLL._AC._SR360,460.jpg",
        categories: "HealthBeauty"
    },
    {
        name: "Cetaphil Moisturizing Cream",
        price: 19.97,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71uLXVxR9fL._AC._SR360,460.jpg",
        categories: "HealthBeauty"
    },
    {
        name: "Olay Active Hydrating Cream Face Moisturizer",
        price: 9.59,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81y-ItDDaFL._AC._SR360,460.jpg",
        categories: "HealthBeauty"
    },
    {
        name: "Brickell Men's Revitalizing Hair Conditioner for Men",
        price: 26.00,
        imgSrc: "https://m.media-amazon.com/images/I/61EIrD+1fjL._AC_UL480_FMwebp_QL65_.jpg",
        categories: "HealthBeauty"
    },
    {
        name: "Head and Shoulders Clinical Strength Anti-Dandruff Shampoo",
        price: 8.97,
        imgSrc: "https://m.media-amazon.com/images/I/71zfOGrutxL._AC_UL480_FMwebp_QL65_.jpg",
        categories: "HealthBeauty"
    },
    {
        name: "Head and Shoulders Classic Clean Anti-Dandruff Shampoo 700mL",
        price: 7.99,
        imgSrc: "https://m.media-amazon.com/images/I/810LfQ7aHML._AC_UL480_FMwebp_QL65_.jpg",
        categories: "HealthBeauty",
        subcategories: ""
    },
    {
        name: "Dove Nutritive Solutions Coconut & Hydration Conditioner 355mL",
        price: 4.48,
        imgSrc: "https://m.media-amazon.com/images/I/51uthUHlouL._AC_UL480_FMwebp_QL65_.jpg",
        categories: "HealthBeauty",
        subcategories: ""
    },
    {
        name: "The Honest Company Conditioning detangler with sweet orange vanilla scent, 118ml",
        price: 6.99,
        imgSrc: "https://m.media-amazon.com/images/I/61resh0w53L._AC_UL480_FMwebp_QL65_.jpg",
        categories: "HealthBeauty",
        subcategories: ""
    },
    {
        name: "butter LONDON Rockin' Royals Makeup Setby Butter London",
        price: 41.00,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/510v-t2wt7L._AA240_FMwebp_QL65_.jpg",
        categories: "HealthBeauty",
        subcategories: ""
    },
    {
        name: "Professional Makeup Brush Set, VIVACE Multifunctional Oval Head Brushes Pack with Teardrop Sponge, Foundation...",
        price: 12.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41HNcFTf0dL._AA240_FMwebp_QL65_.jpg",
        categories: "HealthBeauty",
        subcategories: ""
    },
    {
        name: "Eye Makeup Brushes Set",
        price: 11.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/51cc6Y38thL._AA240_FMwebp_QL65_.jpg",
        categories: "HealthBeauty",
        subcategories: ""
    },
    {
        name: "Kids Makeup Palette for Girl",
        price: 13.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/516ajUk5sTL._AA240_FMwebp_QL65_.jpg",
        categories: "HealthBeauty",
        subcategories: ""
    },
    {
        name: "SHANY 2012 Edition All In One Harmony Makeup Kit",
        price: 52.78,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/51aoQ2KqqlL._AA240_FMwebp_QL65_.jpg",
        categories: "HealthBeauty",
        subcategories: ""
    },
    {
        name: "A Star Is Born: Special Edition2019",
        price: 10.00,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/51ZANha0alL._AA240_FMwebp_QL65_.jpg",
        categories: "SportsMusic",
        subcategories: ""
    },
    {
        name: "Blu-rayBilingual - Blu-ray + DVD + Digital Copy",
        price: 28.49,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61QS4YouWsL._AA240_FMwebp_QL65_.jpg",
        categories: "SportsMusic",
        subcategories: ""
    },
    {
        name: "The Art Of Racing In The Rain2019",
        price: 12.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/51aBdP4Kc6L._AA240_FMwebp_QL65_.jpg",
        categories: "SportsMusic",
        subcategories: ""
    },
    {
        name: "Princess Bride 20th Anniversary2015",
        price: 4.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/51CdUrKt9TL._AA240_FMwebp_QL65_.jpg",
        categories: "SportsMusic",
        subcategories: ""
    },
    {
        name: "SS Kashmir Willow Leather Ball Cricket Bat",
        price: 46.76,
        imgSrc: "https://m.media-amazon.com/images/I/61EaoX5u1HL._AC_UL480_FMwebp_QL65_.jpg",
        categories: "SportsMusic",
        subcategories: ""
    },
    {
        name: "Fifty Shades: 3-Movie Collection2015",
        price: 20.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/51azaWQdduL._AA240_FMwebp_QL65_.jpg",
        categories: "SportsMusic",
        subcategories: ""
    },
    {
        name: "Leather Ball Cricket Bat, Full Adult Size",
        price: 128.17,
        imgSrc: "https://m.media-amazon.com/images/I/81lqk9RzPpL._AC_UL480_FMwebp_QL65_.jpg",
        categories: "SportsMusic",
        subcategories: ""
    },
    {
        name: "Kookaburra Cricket Bat Kahuna Prodigy 50 SH - Kashmir Willow Full Size",
        price: 54.96,
        imgSrc: "https://m.media-amazon.com/images/I/51c+Ee0UpwL._AC_UL480_FMwebp_QL65_.jpg",
        categories: "SportsMusic",
        subcategories: ""
    },
    {
        name: "SG Combopak Cricket Kit Bag with Wheels",
        price: 54.78,
        imgSrc: "https://m.media-amazon.com/images/I/61DkNmNiX3L._AC_UL480_FMwebp_QL65_.jpg",
        categories: "SportsMusic",
        subcategories: ""
    },
    {
        name: "GM SIX6 Cricket Set",
        price: 54.78,
        imgSrc: "https://m.media-amazon.com/images/I/816CmC9I6nL._AC_UL480_FMwebp_QL65_.jpg",
        categories: "SportsMusic",
        subcategories: ""
    },
    {
        name: "Lognwu Women's Sleeve wear",
        price: 30.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/G/15/AMAZON_FASHION/2018/EDITORIAL/HOLIDAY/DNAV/W_CLOTHING/1._CB482211483_.jpg",
        categories: "Fashion",
        subcategories: ""
    },
    {
        name: "Grace Karin Dress",
        price: 314.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41VlCjk-3fL._SL390_SX300_CR0,0,300,390_FMwebp_QL65_.jpg",
        categories: "",
        subcategories: ""
    },
    {
        name: "Ziooer Women's Casual Dress",
        price: 18.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41PInAkuqdL._SL390_SX300_CR0,0,300,390_FMwebp_QL65_.jpg",
        categories: "Fashion",
        subcategories: ""
    },
    {
        name: "Urban Coco Women's Dress",
        price: 14.32,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81+2XObMzoL._AC_SX184_.jpg",
        categories: "Fashion",
        subcategories: ""
    },
    {
        name: "Queenikene Women's Yoga Leggins",
        price: 29.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61zloyAhodL._AC_SX184_.jpg",
        categories: "Fashion",
        subcategories: ""
    },
    {
        name: "Men's T-Shirt",
        price: 22.04,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41c2i00RKSL._SL390_SX300_CR0,0,300,390_FMwebp_QL65_.jpg",
        categories: "Fashion",
        subcategories: ""
    },
    {
        name: "Men's Black Shirt",
        price: 30.15,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41WEFSbkLkL._SL390_SX300_CR0,0,300,390_FMwebp_QL65_.jpg",
        categories: "Fashion",
        subcategories: ""
    },
    {
        name: "Amazon Men's Short",
        price: 19.00,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71R7-FjFzKL._AC_SX184_.jpg",
        categories: "Fashion",
        subcategories: ""
    },
    {
        name: "Tansozer Men's Short",
        price: 15.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61mQ8+FPrAL._AC_SX184_.jpg",
        categories: "Fashion",
        subcategories: ""
    },
    {
        name: "Kids Dress",
        price: 19.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61HwkbYwW1L._AC_SX184_.jpg",
        categories: "Fashion",
        subcategories: ""
    },

    {
        name: "Girls Dress",
        price: 19.56,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61Fhztx3DML._AC_SX184_.jpg",
        categories: "Fashion",
        subcategories: ""
    },
    {
        name: "Boys Dress",
        price: 31.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61sUkgaOkaL._AC_SX184_.jpg",
        categories: "Fashion",
        subcategories: ""
    },
    {
        name: "Boys Gloucses",
        price: 10.99,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/51OBRaXNWQL._SL300_CR0,0,300,390_FMwebp_QL65_.jpg",
        categories: "Fashion",
        subcategories: ""
    },
    {
        name: "Kids Underwear",
        price: 17.97,
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41qixM682PL._SL300_CR0,0,300,390_FMwebp_QL65_.jpg",
        categories: "Fashion",
        subcategories: ""
    }];

let users = [
    {
        username: "admin",
        password: "password"
    }
];

//this variable is to set the login to true when the login is succesful
var islogin = false;

//this block of code add the products to the html 
products.forEach(product => {
    console.log((typeof "".indexOf("")).substring(2, 4));
    let category = product.categories;
    const prod = `
        <div class="prod ${category}" name="${product.name}">
        <img src="${product.imgSrc}" alt="${product.name}" onerror="this.src='assets/head_paper.png'" loading="lazy">
        <h2> ${product.price} CAD </h2>
        <span>${product.name}</span>
        <button onclick="addToCart('${product.name}','${product.price}')"> ADD TO CART </button>
        </div>
        `;
    const test = document.querySelector('main');
    test.innerHTML += prod
});


//this function is used for implementing the search through the array of products

function searchProducts() {
    var input, filter, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    var total_Products = document.getElementsByTagName("span");
    for (i = 0; i < total_Products.length; i++) {
        let product_name = total_Products[i].innerHTML;
        if (product_name.toUpperCase().indexOf(filter) > -1) {
            (total_Products[i].parentElement).style.display = "";
        } else {
            (total_Products[i].parentElement).style.display = "none";
        }

    }
}

//this function is to filter the categories 
function filterProducts(categories) {

    let cls = document.getElementsByClassName(`prod `);
    for (let i = 0; i < cls.length; i++) {
        console.log(cls[i].className);
        if (cls[i].className === `prod ${categories}`) {
            cls[i].style.display = "";
        }
        else {
            cls[i].style.display = "none";
        }
    }

}

//this functions deals about adding a product to the cart

function addToCart(name, price) {
    const prod = `<div class="cartitem" name="${name}">
    <span>${name}</span>
    <span>${price}</span>
    <button onclick="removeFromCart(this)" width="10px"">Remove</button>
    </div>`
    const test = document.getElementById('cart');
    test.innerHTML += prod;
}

//this function is to remove a product from a cart
function removeFromCart(link) {

    link.parentNode.parentNode.removeChild(link.parentNode);
    let child_count = document.getElementById("cart").childElementCount;
    if (child_count > 1)
        document.getElementById('cart').style.display = 'block';
    else
        document.getElementById('cart').style.display = 'none';
}


//this functio is to check the user given credentials with the stored credentials from users array
function login(event) {

    let user_value = document.getElementById("Username").value;
    let pwd_value = document.getElementById("password").value;
    //preventing the form submission
    event.preventDefault();

    users.forEach(user => {
        if (user.username === user_value && user.password == pwd_value) {
            islogin = true;
            document.getElementById('login').style.display = 'none';
        }
    });
    if (islogin === false)
        alert("Enter valid credentials to login");



}

//this function opens the cart if and only if the log is done
function openCart() {


    if (islogin === true) {
        
        let child_count = document.getElementById("cart").childElementCount;
        if (child_count > 1)
            document.getElementById('cart').style.display = 'block';
        else
            alert("Your Cart is empty please add any product to view");
    }
    else
        alert("Please login to view cart");
}






