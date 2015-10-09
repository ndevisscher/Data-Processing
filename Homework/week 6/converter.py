import json

list_of_lists = []


with open('data.csv') as f:
    for line in f:
        inner_list = [elt.strip() for elt in line.split(';')]
        list_of_lists.append(inner_list)

print list_of_lists
for point in list_of_lists:
    point[0] = point[0].strip()
    point[1] = point[1].strip()
    
    

with open('datapoints.json', 'w') as fp:
    json.dump({'data':"data",'points':list_of_lists}, fp)
