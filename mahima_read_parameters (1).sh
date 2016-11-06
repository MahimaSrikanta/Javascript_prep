#!/bin/bash
# Read parameters wrapper
# Input parameters:
# name as -n=<name-identifier>
# place as -p=<place-identifier>
# example: sh mahima_read_parameters.sh -n=16.5.2 -p=0.5.el7
####################################

# Static(Default) variable assignment
name="Mahima_Srikanta"
place="Fremont,CA"


#Get command line arguments
for i in "$@"
do
case $i in
    -n=*|--name=*)
    name="${i#*=}"
    ;;
    -p=*|--place=*)
    place="${i#*=}"
    ;;
    -h|--help)
    echo "Script to read Parameters."
    echo "Usage: sh mahima_read_parameters.sh -n=<name-identifier> -p=<place-identifier>"
    echo "example: sh mahima_read_parameters.sh -n=test_name -p=test_place"
    exit 0
    ;;
esac
done

echo "The Values are:"
echo "Name is: "$name
echo "Place is: "$place

