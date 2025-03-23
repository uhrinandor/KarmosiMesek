#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | sed 's/#.*//g' | xargs)
else
  echo ">> .env file not found! Please create it with the required environment variables."
  exit 1
fi

# Configuration from environment variables
BUILD_DIR="build"
ZIP_NAME="build.zip"
REMOTE_PATH="public_html"

echo "> Starting React Deployment to cPanel..."

# 1️⃣ Build React App
echo "> Building the React app..."
npm run build || { echo ">> Build failed!"; exit 1; }

# 2️⃣ Zip the build folder
echo "> Zipping build folder..."
rm -f $ZIP_NAME
zip -r $ZIP_NAME $BUILD_DIR

# 3️⃣ Upload ZIP to cPanel via FTP using ncftpput
echo "> Uploading build to cPanel..."
ncftpput -u "$CPANEL_USER" -p "$CPANEL_PASSWORD" "$CPANEL_HOST" "$REMOTE_PATH" "$ZIP_NAME" || { echo ">> FTP Upload failed!"; exit 1; }

# 4️⃣ SSH into cPanel and extract ZIP inside public_html
echo "📂 Unzipping the build on cPanel..."
ssh $CPANEL_USER@$CPANEL_HOST <<EOF
  cd $REMOTE_PATH
  #Cleanup files
  rm -r static apple-touch-icon.png asset-manifest.json favicon.png favicon.svg index.html manifest.json robots.txt
  # Unzip the new build
  unzip -o $ZIP_NAME
  # Cleanup: remove the ZIP file after extraction
  rm -f $ZIP_NAME
  mv mv build/* build/.* ./
  rm -r build
EOF

echo "> Deployment Successful!"