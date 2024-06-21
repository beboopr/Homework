#building a network coffe shop, were the costumer can order from a menu
#and the program will give the total price and the time it will be ready

print("Welcome to the coffee shop.\n")

name = input("What is your name?\n")

if name == "bob" or name == "ed":
    evil_status = input("Are you evil?\n")
    good_deeds = int(input("How many good deeds have you done today?\n"))
    if evil_status == "yes" and good_deeds < 5:
        
        print("Sorry, your not Welocme here." , name)
        exit()
    else:
        print("Ohh your one of the good ones.\n")
else:
    print("Welcome to the coffee shop. Here's our menu:", name)


Menu = ("Coffee", "Tea", "Water", "Soda", "Water with Lemon")

print("What would you like to order? ")

order = input(Menu)

print("You ordered: ", order)
print("is that correct?")

answer = input()

price = 8.99

quantity = (input("How many would you like? "))

if order == "Coffee":
    price = 8.99
elif order == "Tea":
    price = 4.99
elif order == "Water":
    price = 2.99
elif order == "Water with Lemon":
    price = 3.99
elif order == "Soda":
    price = 3.99
else:
    print("Sorry, we don't have that.")

total = price * int(quantity)

print("Thank you", name, "for your", order, "order.")
print("Your total is: $",total, "and your" ,int(quantity),order,
    "will be ready shortly.")
