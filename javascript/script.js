var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
// $(document).ready(function(){
 $(function(){
    $('.summary').hide();
    $('.customerdata').hide();
    $("#checkout").click(function(){
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        let order = (flavour, size, crust, topping, number, total) => {
            return {flavour, size, crust, topping, number, total};
        }; 
    });
});
// });
//     get price

let price, totalPrice;
        switch (flavour) {
            case flavour = "cheeseburger":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "large":
                            price = 1200;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 250;
                            } else if (crust === "crispy") {
                                totalPrice = (price * number) + 300;
                            } else {
                                totalPrice = (price * number) + 350;
                            } break;
                        }
            case flavour = "chicken-hawaiian":
                          switch (size) {
                          case size = "small":
                          price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                        case size = "large":
                            price = 1200;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 250;
                            } else if (crust === "crispy") {
                                totalPrice = (price * number) + 300;
                            } else {
                                totalPrice = (price * number) + 350;
                            } break;
                        }
            case flavour = "chicken-macon-BBQ":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                        case size = "large":
                            price = 1200;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 250;
                            } else if (crust === "crispy") {
                                totalPrice = (price * number) + 300;
                            } else {
                                totalPrice = (price * number) + 350;
                            } break;
                        }
            case flavour = "meat-deluxe":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                        case size = "large":
                            price = 1200;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 250;
                            } else if (crust === "crispy") {
                                totalPrice = (price * number) + 300;
                            } else {
                                totalPrice = (price * number) + 350;
                            } break;
                        }
            case flavour = "veg-feast":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                        case size = "large":
                            price = 1200;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "stuffed") {
                                totalPrice = (price * number) + 250;
                            } else if (crust === "crispy") {
                                totalPrice = (price * number) + 300;
                            } else {
                                totalPrice = (price * number) + 350;
                            } break;
                        }
                    }
                
                    switch (topping) {
                        case topping = "tomato":
                            totalPrice = totalPrice + 50;
                            break;
                        case topping = "spinach":
                            totalPrice = totalPrice + 50;
                            break;
                        case topping = "mushrooms":
                            totalPrice = totalPrice + 50;
                            break;
                        case topping = "bacon":
                            totalPrice = totalPrice + 50;
                            break;
                        case topping = "sausages":
                            totalPrice = totalPrice + 50;
                            break;
                        
                        }
      
     let newOrder = order(flavour, size, crust, topping, number, totalPrice);
                        console.log(newOrder);  

                        $('.summary').slideDown(1000);
                        $('.customerdata').slideUp();
                        $('#list').slideDown();
                        $('.deliver').show(500);
                        $('.delivernot').show(500);
                
                        $('#list').text(" ");
                        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
                            + newOrder.s + "<br>" + "Crust : "
                            + newOrder.c + "<br>" + "Toppings :  "
                            + newOrder.t + "<br>" + " Number of pizzas :  "
                            + newOrder.n + "<br>" + "Total Price :  "
                            + newOrder.total + "<br><br>").css('font-family', 'Mansalva').css('font-size', '24px');
                    });

                    $(".deliver").click(function () {
                        $('.summary').slideUp();
                        $('#list').slideUp();
                        $('.summary').text("Provide your location details").slideDown();
                        $('.deliver').hide(500);
                        $('.delivernot').hide(500);
                        $('.customerdata').slideDown();
                        alert("delivery will be in 15 minutes. Thank you for chhosing pizza hub")
                    });
                    $(".delivernot").click(function () {
                        alert("Thank you for your purchase!!!")

                    });
                    $(function () {
                        $.scrollify.move('#sum-order');
                    });
                });