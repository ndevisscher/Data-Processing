#!/usr/bin/env python
# Name: niek de visscher
# Student number: 10667474
'''
This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv

from pattern.web import URL, DOM, plaintext
from pattern.web import NODE, TEXT, COMMENT, ELEMENT, DOCUMENT

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'

def extract_tvseries(dom):
    '''
    Extract a list of highest ranking TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Ranking
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''
    # Trying to make a replacer for some symbols
    #replaceLetters = ["î","û","ô","ê","â"]    
    
    # Making the list in which we store all the data 
    showData = []     
    
    for e in dom.by_tag("td.title")[:50]: # This lets us select the individual shows
        # Here we store the data for every individual show, so we can add it to the overall list
        show = []        
        # We now get the data for individual shows, and we add every attribute to our list
        for titles in e.by_tag("a")[:1]: # Title of a series
            title = plaintext(titles.content)
#            for ch in replaceLetters:
#                if ch in title:
#                    title = title.replace(ch,'')
            show.append(title)
        for ratings in e.by_class("value"): # Rating for a series
           rating = plaintext(ratings.content)
           show.append(rating)
        for genres in e.by_class("genre"): # Genre of a series
            genre = plaintext(genres.content)
            genre = genre.replace(" | ",',') # Cleaning our output
            show.append(genre)
        for names in e.by_class("credit"): # Main actors of a series
            name = plaintext(names.content)
            name = name.replace("With: ",'') # Cleaning our output
            show.append(name)
        for runtimes in e.by_class("runtime"): # Runtime of a series
            runtime = plaintext(runtimes.content)
            runtime = runtime.replace("mins.",'') # Cleaning our output
            show.append(runtime)
        # Adding all the data of this individual show to the total list
        showData.append(show)

    # Returning our complete list of all the data for the shows
    return showData  


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])
    # Here we write the information for every individual show into our csv File
    for show in tvseries:
        show[0] = show[0].encode("ascii","ignore")
        show[3] = show[3].encode("ascii","ignore")
        writer.writerow([show[0],show[1],show[2],show[3],show[4]])

    # ADD SOME CODE OF YOURSELF HERE TO WRITE THE TV-SERIES TO DISK

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)