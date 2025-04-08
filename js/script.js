// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by:Shem
// Created on:April 2025
// This file contains the JS functions for index.html
"use strict";
      // Function to calculate area and perimeter
      function calculate() {
        // Get the input values
        let height = parseFloat(document.getElementById("height-of-triangle").value);
        let sideA = parseFloat(document.getElementById("side-a").value);
        let sideB = parseFloat(document.getElementById("side-b").value);

        // Calculate Area
        let area = (sideA + sideB)/2 * height;

        // Display the results
        document.getElementById("area").innerHTML = "Area " + area.toFixed(1) + "cm^2";
      }
