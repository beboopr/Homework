#Were going on a camping trip! We need to pack our bags
#with the essentials.

#Create a list of items that we need to pack for our trip.

supplies = ["tent", "sleeping bag", "water", "water", "rasberry-pi"]

camp_site = ["Lakewaters", 404, 89.2, 21, False]

#supplies.append("toilet paper")
supplies.extend(["rasberry-pi", "bug spray", "dominoes"])
#supplies.insert(0, "rasberry-pi")
#supplies.remove("tent")
supplies.pop(0)


print(supplies)