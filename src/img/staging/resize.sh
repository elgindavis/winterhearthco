#!/bin/bash

# Takes all images in current directory and creates standardized names and sizes
# Heights: 300px, 400px, 800px, original image height

if [[ $(find ./src/img/staging/ -name '*.jpg' -print) ]]
then
    for f in ./src/img/staging/*.jpg; 
        do 
            original="${f%.jpg}.jpg"
            image300="${f%.jpg}-300p.jpg"
            image400="${f%.jpg}-400p.jpg"
            image600="${f%.jpg}-600p.jpg"
            image800="${f%.jpg}-800p.jpg"

            cp $original $image300 
            cp $original $image400 
            cp $original $image600 
            cp $original $image800 
            
            echo Resizing $original:
            
            echo $image300
            convert $image300 -resize 450x300\> $image300
            identify -format "%wx%h\n" $image300

            echo $image400
            convert $image400 -resize 600x400\> $image400
            identify -format "%wx%h\n" $image400
            
            echo $image600
            convert $image600 -resize 900x600\> $image600
            identify -format "%wx%h\n" $image600

            echo $image800
            convert $image800 -resize 1200x800\> $image800
            identify -format "%wx%h\n" $image800
        done
fi

if [[ $(find ./src/img/staging/ -name '*.png' -print) ]]
then
    for f in ./src/img/staging/*.png; 
        do 
            original="${f%.png}.png"
            image300="${f%.png}-300p.png"
            image400="${f%.png}-400p.png"
            image600="${f%.png}-600p.png"
            image800="${f%.png}-800p.png"

            cp $original $image300 
            cp $original $image400 
            cp $original $image600 
            cp $original $image800 
            
            echo Resizing $original:
            
            echo $image300
            convert $image300 -resize 450x300\> $image300
            identify -format "%wx%h\n" $image300

            echo $image400
            convert $image400 -resize 600x400\> $image400
            identify -format "%wx%h\n" $image400
            
            echo $image600
            convert $image600 -resize 900x600\> $image600
            identify -format "%wx%h\n" $image600

            echo $image800
            convert $image800 -resize 1200x800\> $image800
            identify -format "%wx%h\n" $image800
        done
fi
