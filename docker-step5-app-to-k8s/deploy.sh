# 建置欲部署之 Image
docker build -t jaychangha/template-client:latest -t jaychangha/template-client:$SHA ./docker-step5-app-to-k8s/client
docker build -t jaychangha/template-server:latest -t jaychangha/template-server:$SHA ./docker-step5-app-to-k8s/server
docker build -t jaychangha/template-worker:latest -t jaychangha/template-worker:$SHA ./docker-step5-app-to-k8s/worker

# 上傳 Image 至 Docker Hub
docker push jaychangha/template-client:latest
docker push jaychangha/template-server:latest
docker push jaychangha/template-worker:latest
docker push jaychangha/template-client:$SHA
docker push jaychangha/template-server:$SHA
docker push jaychangha/template-worker:$SHA

kubectl apply -f ./docker-step5-app-to-k8s/k8s
kubectl set image deployments/server-deployment server=jaychangha/template-server:$SHA
kubectl set image deployments/client-deployment client=jaychangha/template-client:$SHA
kubectl set image deployments/worker-deployment worker=jaychangha/template-worker:$SHA