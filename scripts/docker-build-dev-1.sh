timestamp=`date +%s`
docker build -t chb-dev-1.chabloom.com:32000/chabloom-transactions-frontend:$timestamp -t chb-dev-1.chabloom.com:32000/chabloom-transactions-frontend:latest .
docker push chb-dev-1.chabloom.com:32000/chabloom-transactions-frontend:$timestamp
docker push chb-dev-1.chabloom.com:32000/chabloom-transactions-frontend:latest
