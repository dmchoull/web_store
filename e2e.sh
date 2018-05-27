#!/usr/bin/env bash
set -ev

yarn build
yarn export

set +e

yarn serve &

# wait for serve to start
while ! curl -s localhost:8080 >/dev/null; do
  sleep 1
done

yarn run cypress run
RESULT=$?

# kill serve process
kill %1

exit ${RESULT}
