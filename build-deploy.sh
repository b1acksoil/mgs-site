#!/bin/bash

rm -rf ./gh-pages/*
yarn run build
mv ./dist/* ./gh-pages/
rm -rf ./dist
cd gh-pages
cp index.html 404.html
git add .
git commit -m "Update Site"
git push origin gh-pages
cd ..
