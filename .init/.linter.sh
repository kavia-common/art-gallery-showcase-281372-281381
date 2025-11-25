#!/bin/bash
cd /home/kavia/workspace/code-generation/art-gallery-showcase-281372-281381/frontend_react
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

