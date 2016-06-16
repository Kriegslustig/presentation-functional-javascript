#!/bin/bash

nl=$'\n'
examples="$(for file in examples/*.js; do
  cat ${file} | grep -Ev "^//";
  printf "%0.s${nl}" {1..20}
done)"
echo "${examples}"

