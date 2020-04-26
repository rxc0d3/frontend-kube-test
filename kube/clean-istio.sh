#!/usr/bin/env bash

kubectl delete deployment frontend-v1 -n app
kubectl delete svc frontend -n app
kubectl delete Gateway app-gateway -n app
kubectl delete VirtualService frontend  -n app