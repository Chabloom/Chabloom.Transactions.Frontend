timestamp=`date +%s`
docker build -t mdcasey/chabloom-transactions-frontend:$timestamp -t mdcasey/chabloom-transactions-frontend:latest .
docker push mdcasey/chabloom-transactions-frontend:$timestamp
docker push mdcasey/chabloom-transactions-frontend:latest
