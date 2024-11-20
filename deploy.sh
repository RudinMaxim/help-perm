#!/bin/bash
PROJECT_DIR="/"

rollback() {
    echo "Произошла ошибка. Выполняется откат..."
    docker-compose down
    docker-compose up -d
    exit 1
}

deploy() {
    cd $PROJECT_DIR
    
    git pull origin main
    
    docker-compose down
    docker-compose build
    docker-compose up -d || rollback
    
    docker image prune -f
}

trap rollback ERR

deploy