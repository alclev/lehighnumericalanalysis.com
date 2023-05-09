import os

filename = 'valid_matrix2.data'
num_rows = 25
num_cols = 25

def generate_matrix(file):
    file.write(str(num_rows) + ', ' + str(num_cols) + '\n')
    for(i in range(num_rows * num_cols)):
        file.write(str(i) + ', ')

if os.path.isfile(filename):
    with open(filename, 'w') as f:
        generate_matrix(f)
else:
    with open(filename, 'x') as f:
        generate_matrix(f)

