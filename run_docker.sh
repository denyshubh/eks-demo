# Step 1:
# Build image and add a descriptive tag
docker builder build --tag=denyshubh/portfolio .

# Step 2: 
# List docker images
docker image ls

# Step 3: 
# Run create-react-app
docker container run --name portfolio -p 80:4000 denyshubh/portfolio
