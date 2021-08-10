SECONDS=0
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR
echo $PWD

# printf "\nStarting to fetch new data:\n"

printf "\nBuilding...\n"

[ -d "source/_fetchdir" ] && rm -r source/_fetchdir/*
[ ! -d "source/_fetchdir" ] && mkdir -p source/_fetchdir
[ -d "build" ] && rm -r build/*
[ ! -d "build" ] && mkdir -p build
[ ! -d "build/assets" ] && mkdir -p build/assets

cp -R assets/* build/assets/
node ./node_modules/entu-ssg/src/build.js ./entu-ssg.yaml full

duration=$SECONDS
minutes=$((duration/60))
seconds=$((duration%60))
printf "\n\nBUILD FINISHED IN $minutes m $seconds s.\n\n"
