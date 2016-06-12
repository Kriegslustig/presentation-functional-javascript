#!/bin/bash

nl=$'\n'
examples="$(for file in examples/*.js; do
  cat ${file} | grep -Ev "^//";
  printf "%0.s${nl}" {1..10}
done)"
echo "${examples}"

