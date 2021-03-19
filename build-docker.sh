docker build -t chabloom-transactions-frontend:1.0.0 .
docker save chabloom-transactions-frontend > chabloom-transactions-frontend.tar
microk8s ctr image import chabloom-transactions-frontend.tar
rm chabloom-transactions-frontend.tar
