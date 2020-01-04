#!/bin/bash

# ---------- CONSTANTS ----------
echo ---------- CONSTANTS ----------
readonly PACKAGE_NAME=package.zip
echo PACKAGE_NAME=$PACKAGE_NAME
echo ------ END CONSTANTS ----------
# -------------------------------

# zip required files for website
echo Creating zip ...
zip -r package.zip ./css ./images ./js ./libs ./files index.html favicon.ico LICENSE.md

# upload .zip
echo Uploading zip ...
echo LINK:
echo 
curl --upload-file ./$PACKAGE_NAME https://transfer.sh/$PACKAGE_NAME
echo
echo 

# clean up
echo Cleaning up ...
rm ./$PACKAGE_NAME