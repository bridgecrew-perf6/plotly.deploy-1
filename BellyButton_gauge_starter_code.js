// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata = data.metadata;
    // Create a variable that holds the first sample in the array.
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
   
    // 2. Create a variable that holds the first sample in the metadata array.
    var result = resultArray[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIDS = firstSample.otu_ids;
    var otuLables = firstSample.otu_labels;
    var sampleValues = firstSample.sample_values;
    console.log(otuIDS);
    console.log(otuLables);
    console.log(sampleValues);

    // 3. Create a variable that holds the washing frequency.
   var wFreq = result.wfreq;
   var wFreqFloat = parseFloat(wFreq).toFixed(2)
    // Create the yticks for the bar chart.
    var yticks = otuIDS
    .map(samplesObj => "OTU" + samplesObj)
    .slice(0, 10)
    .reverse();
  console.log(yticks);
    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar", [barData], barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
    title: { text: "{"Scrubs per Week"},
    type: "indicator",
    mode: "gauge+number+delta"
    }


     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      title: "Belly Button Washing Frequency",
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout)
  });
}
