#Were going on a camping trip! We need to pack our bags
#with the essentials.

#Create a list of items that we need to pack for our trip.

supplies = ["tent", "sleeping bag", "water", "water", "rasberry-pi",
            "clothes", "flashlight", "first aid kit", "map",
            "portable fan"]

camp_site = ["Lakewaters", 404, 89.2, 10, False]

#supplies.append("toilet paper")
supplies.extend(["toilet paper", "bug spray", "dominoes"])
supplies.insert(0, "toilet paper")

print(supplies)