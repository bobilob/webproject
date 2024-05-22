import os
import json

# Path to the directory containing text files
pages_dir = '../../pages'

# List all .txt files in the pages directory
files = [f for f in os.listdir(pages_dir) if f.endswith('.txt')]

# Create a dictionary to store the files
data = {"files": files}

# Path to the pages.json file
json_path = os.path.join(pages_dir, 'pages.json')

# Write the data to pages.json
with open(json_path, 'w') as json_file:
    json.dump(data, json_file, indent=4)

print(f'Updated {json_path} with the following files: {files}')
