#!/usr/bin/env bash
set -ev

yarn build
yarn start &

# wait for server to start
while ! curl -s localhost:8080 >/dev/null; do
  sleep 1
done

yarn run cypress run
RESULT=$?

# kill serve process
kill %1

exit ${RESULT}
