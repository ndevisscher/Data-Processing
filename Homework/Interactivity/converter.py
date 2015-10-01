import json

list_of_lists = []


with open('data.txt') as f:
    for line in f:
        inner_list = [elt.strip() for elt in line.split(',')]
        list_of_lists.append(inner_list)

for point in list_of_lists:
    point[0] = point[0].strip()
    point[1] = point[1].strip()
    

with open('datapoints.json', 'w') as fp:
    json.dump(list_of_lists, fp)
