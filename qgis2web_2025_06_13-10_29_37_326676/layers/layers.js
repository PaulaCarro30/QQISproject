var wms_layers = [];


        var lyr_GOOGLEMAPS_0 = new ol.layer.Tile({
            'title': 'GOOGLE MAPS ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Paradasprincipales_1 = new ol.format.GeoJSON();
var features_Paradasprincipales_1 = format_Paradasprincipales_1.readFeatures(json_Paradasprincipales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paradasprincipales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paradasprincipales_1.addFeatures(features_Paradasprincipales_1);
var lyr_Paradasprincipales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paradasprincipales_1, 
                style: style_Paradasprincipales_1,
                popuplayertitle: 'Paradas principales',
                interactive: false,
                title: '<img src="styles/legend/Paradasprincipales_1.png" /> Paradas principales'
            });

lyr_GOOGLEMAPS_0.setVisible(true);lyr_Paradasprincipales_1.setVisible(true);
var layersList = [lyr_GOOGLEMAPS_0,lyr_Paradasprincipales_1];
lyr_Paradasprincipales_1.set('fieldAliases', {'fid': 'fid', 'Field1': 'Field1', 'Field2': 'Field2', 'Field3': 'Field3', 'Field4': 'Field4', });
lyr_Paradasprincipales_1.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', 'Field4': 'TextEdit', });
lyr_Paradasprincipales_1.set('fieldLabels', {'fid': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'Field3': 'no label', 'Field4': 'no label', });
lyr_Paradasprincipales_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});