import csv
import json

csvfile = open('data.txt', 'r')
jsonfile = open('datapoints.json', 'w')

fieldnames = ("datum","temperatuur")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write(',')

