#!/bin/bash

BACKUP_DIR="/opt/backups"
APP_DIR="/opt/help-perm"
DATE=$(date +"%Y%m%d_%H%M%S")

mkdir -p $BACKUP_DIR

docker run --rm -v /var/lib/docker/volumes:/backup \
    -v $BACKUP_DIR:/host \
    alpine tar cvf /host/docker-volumes-$DATE.tar /var/lib/docker/volumes

tar -czvf $BACKUP_DIR/app-code-$DATE.tar.gz $APP_DIR

find $BACKUP_DIR -type f -mtime +7 -delete