#!/bin/sh
# deploy.sh

set -e

#deploy fazendo upload via FTP
lftp -c "set net:timeout 5; set ftp:ssl-allow no;
open ftp://$FTP_USER:$FTP_PASSWORD@$FTP_HOST:21; mirror -Rv . .; quit;"