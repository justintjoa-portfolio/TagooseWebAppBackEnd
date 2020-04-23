docker build -t react:app .
docker run -it -p 3001:3000 react:app

Base URL: http://localhost:3001

Make sure you type docker ps and do a docker stop for all entries in Container ID (first line only)
