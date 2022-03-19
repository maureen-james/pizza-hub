
$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();

    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

    
        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };

    
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
                        } else if (crust === "sttuffed") {
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
                        }
                        break;
                }
                break;
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
                        }
                        break;
                }
                break;
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
                        }
                        break;
                }
                break;
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
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "crispy") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
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
                        }
                        break;
                }
                break;
            case flavour = "veg-feast":
                switch (size) {
                    case size = "small":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "cripsy") {
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
                        }
                        break;
                }
                break;
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

       
        // order output
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'Mansalva').css('font-size', '24px');
    });


    $(".deliverhome").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliverhome').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
        prompt("do you want pizza home delivery services?")
    
    });
    $(".deliver").click(function () {
        alert("Your order will be delivered to your location.Please prepare ksh 150 for delivery.")
    });


    
    $(".delivernot").click(function () {
     alert("Thank you for shopping with us")
    });

    
    $(function () {
        $.scrollify.move('#sum-order');
    });
});