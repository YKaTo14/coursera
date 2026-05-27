#!/bin/sh

# Simple Interest Calculator
# Formula: SI = (P * R * T) / 100

echo "Enter the principal amount:"
read principal

echo "Enter the rate of interest:"
read rate

echo "Enter the time period:"
read time

simple_interest=$(awk "BEGIN { printf \"%.2f\", ($principal * $rate * $time) / 100 }")

echo "Simple interest is: $simple_interest"
