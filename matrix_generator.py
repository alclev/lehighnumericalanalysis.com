import os

base_dir = '~/Downloads/'
filename = 'valid_matrix2.csv'
output = os.path.join(base_dir, filename)
num_rows = 25
num_cols = 25

def generate_matrix(file):
    file.write(str(num_rows) + ', ' + str(num_cols) + '\n')
    for i in range(num_rows * num_cols):
        file.write(str(i))
        if(i < num_rows * num_cols - 1):
            file.write(', ')
    file.close()

generate_matrix(open(filename, "w"))
