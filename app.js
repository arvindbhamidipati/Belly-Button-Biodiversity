console.log(d3.json("samples.json"))

function gpbar(id) {
  d3.json("samples.json").then(data =>{
    //console.log(data)
    var ids = data.samples[0].otu_ids
    //console.log(ids)
    //cut the data into the top 10. Graph should only show top 10 in reverse order
    var sampleValues =  data.samples[0].sample_values.slice(0,10).reverse();
    //console.log(sampleValues)
    var data_labels =  data.samples[0].otu_labels.slice(0,10);
    //console.log(data_labels)
    var OTU_topTen = (data.samples[0].otu_ids.slice(0, 10)).reverse();
    //console.log(OTU_topTen)
    var OTU_id = OTU_topTen.map(d => "OTU " + d);
    //console.log(OTU_id)
    var labels =  data.samples[0].otu_labels.slice(0,10);
    //console.log(labels)
    console.log(`OTU IDS: ${OTU_id}`)
    console.log(`OTU_labels: ${labels}`)

    var structure = {
            x: sampleValues,
            y: OTU_id,
            text: data_labels,
            marker: {
            color: 'blue'},
            type:"bar",
            orientation: "h",
        };

    var data = [structure]

    Plotly.newPlot("bar", data);
})}

gpbar();


//---------------------------------- Bubble Chart-------------------- //
function gpbubble(id) {
  d3.json("samples.json").then((data) =>{
    //console.log(data)
    var ids = data.samples[0].otu_ids
    //console.log(ids)
    //cut the data into the top 10. Graph should only show top 10 in reverse order
    var sampleValues =  data.samples[0].sample_values.slice(0,10).reverse();
    //console.log(sampleValues)
    var data_labels =  data.samples[0].otu_labels;
    //console.log(data_labels)
    var OTU_topTen = (data.samples[0].otu_ids).reverse();
    //console.log(OTU_topTen)
    var OTU_id = OTU_topTen.map(d => "OTU " + d);
    //console.log(OTU_id)
    var labels =  data.samples[0].otu_labels;
    //console.log(labels)
    console.log(`OTU IDS: ${OTU_id}`)
    console.log(`OTU_labels: ${labels}`)

    var trace1 = {
            x: data.samples[0].otu_ids,
          //x: data.samples[0].otu_ids.slice(0,10).reverse(),
          //y: data.samples[0].sample_values.slice(0,10).reverse(),
            y: data.samples[0].sample_values,
            mode: "markers",
            marker: {
                size: data.samples[0].sample_values
            //  size: data.samples[0].sample_values.slice(0,10).reverse()
            },
            text:  data.samples[0].otu_labels
          //text:  data.samples[0].otu_labels.slice(0,10).reverse()
        };

        // set the layout for the bubble plot
        var layout_2 = {
            xaxis:{title: "OTU ID"},
        };

        var data1 = [trace1];

    Plotly.newPlot("bubble", data1, layout_2);
})}

gpbubble();


//----------------------------GAUGE CHART---------------------------------------//

function gpGauge(id) {
  d3.json("samples.json").then((data) =>{
    //console.log(data)
    var ids = data.samples[0].otu_ids
    //console.log(ids)
    //cut the data into the top 10. Graph should only show top 10 in reverse order
    var sampleValues =  data.samples[0].sample_values.slice(0,10).reverse();
    //console.log(sampleValues)
    var data_labels =  data.samples[0].otu_labels;
    //console.log(data_labels)
    var OTU_topTen = (data.samples[0].otu_ids).reverse();
    //console.log(OTU_topTen)
    var OTU_id = OTU_topTen.map(d => "OTU " + d);
    //console.log(OTU_id)
    var labels =  data.samples[0].otu_labels;
    //console.log(labels)
    console.log(`OTU IDS: ${OTU_id}`)
    console.log(`OTU_labels: ${labels}`)
    //var wfreq = data[0].wfreq

    var trace2 = {
        domain: { x: [0, 1], y: [0, 1]},
        value: wfreq,
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: { range: [null, 9] },
        }
      }
      Plotly.newPlot(gauge, data);

})}

gpGauge();
