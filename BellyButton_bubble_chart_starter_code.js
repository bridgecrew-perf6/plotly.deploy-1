// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
   x:otuIDS,
   y: sampleValues,
   text:otuLabels,
   mode:"markers",
   marker:{
    color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
    size:[40, 60, 80, 100]
   }
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title:"Bacteria Clutures Per Sample"
      xaxis:{title:"OTU ID"}
      margin:{
        l: 50,
        r: 50,
        b: 100,
        t: 100
      },
      hovermode:
      
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot(bubbleData,bubbleLayout); 
  });
}
