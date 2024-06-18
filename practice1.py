#building a network coffe shop..

print("Welcome to the coffee shop. Here's our menu: ")
Menu = ("Coffee", "Tea", "Water", "Soda")

print("What would you like to order? ")

order = input(Menu)

print("You ordered: ", order)
print("is that correct?")

answer = input()

name = input("What is your name? ")

price = 8.99

quantity = (input("How many would you like? "))

total = price * int(quantity)

print("Thank you", name, "for your", order, "order.")
print("Your total is: $",total, "and your" ,int(quantity),order, "will be ready shortly.")
