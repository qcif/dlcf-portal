#! /bin/sh
export NAME=$1
export USER=$2
export CSS=$(sass branding.scss --style=compressed)

envsubst < brandingRequest.json.template > brandingRequest.json
