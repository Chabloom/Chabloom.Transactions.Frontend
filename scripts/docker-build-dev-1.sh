timestamp=`date +%s`
docker build -t 10.1.1.11:32000/chabloom-transactions-frontend:$timestamp -t 10.1.1.11:32000/chabloom-transactions-frontend:latest .
docker push 10.1.1.11:32000/chabloom-transactions-frontend:$timestamp
docker push 10.1.1.11:32000/chabloom-transactions-frontend:latest
