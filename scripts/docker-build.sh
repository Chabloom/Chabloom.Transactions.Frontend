timestamp=`date +%s`
docker build -t chb-prod-1.chabloom.com:32000/chabloom-transactions-frontend:$timestamp -t chb-prod-1.chabloom.com:32000/chabloom-transactions-frontend:latest .
docker push chb-prod-1.chabloom.com:32000/chabloom-transactions-frontend:$timestamp
docker push chb-prod-1.chabloom.com:32000/chabloom-transactions-frontend:latest
