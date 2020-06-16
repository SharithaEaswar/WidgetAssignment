input_file = open("./features/review.feature", 'r')
prev_line = False
lines =[]
for line in input_file:
 if not prev_line:
    lines.append(line)
    if "Examples:" in line:
        #print(line)
        prev_line=True
input_file.close()

input_file = open("./features/review.feature", 'w')
#print(lines)
for line in lines:
   input_file.write(line)
input_file.close()
# to write the examples

f = open("./features/review.feature", "a")

with open("./Data/review.csv") as myfile:
    lines = myfile.readlines()


myfile.close()
x = []

for line in lines:
   
    line = line.replace("\n", '')
    line = "|" + line.replace(',', '|') + "|\n"

    x.append(line)
    

f.writelines(x)
f.close()


