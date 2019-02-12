#!/bin/sh
# deploy.sh

set -e

sudo apt-get install -y lftp

#deploy fazendo upload via FTP
lftp -c "set net:timeout 5; set ftp:ssl-allow no;
open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST:21; mirror -Rv public .; quit;"