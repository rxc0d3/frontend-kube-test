#!/usr/bin/env bash

export PROJECT=rxcore
export CONTAINER_VERSION=v1
export IMAGE_NAME=frontend
export IMAGE=$PROJECT"/"$IMAGE_NAME":"$CONTAINER_VERSION
export BUILD_HOME=.

echo 'Build image ... ' $IMAGE
docker build -t $IMAGE $BUILD_HOME
echo 'Successfully built ' $IMAGE

echo 'Push image ... ' $IMAGE
#push to docker container registry
docker push $IMAGE
echo 'Successfully pushed to Docker Container Registry ' $IMAGE

echo 'Delete old deploy kubernetes ... ' 

#delete old deploy
kubectl delete deployment frontend-v1 -n app
echo 'Successfully deleted ' 

echo 'Apply changes app kubernetes ' 
# apply yaml file
kubectl apply -f "${PWD}/kube/frontend.yaml"

echo 'Successfully deploy ' 




