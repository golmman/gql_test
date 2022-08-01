#!/bin/bash

echo 'Starting terminals with configured commands...'

COMMANDS=(
    'yarn start:simple'
    'yarn start:gateway'
)

for COMMAND in "${COMMANDS[@]}"; do
    (alacritty -t "$COMMAND" -e "$SHELL" -c "$COMMAND && $SHELL" || kill 0) &
done

echo 'Done!'

echo 'Close all terminals with ctrl+c .'
wait
