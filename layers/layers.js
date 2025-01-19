var wms_layers = [];
var format_sungai_0 = new ol.format.GeoJSON();
var features_sungai_0 = format_sungai_0.readFeatures(json_sungai_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sungai_0.addFeatures(features_sungai_0);var lyr_sungai_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_0, 
                style: style_sungai_0,
    title: 'sungai<br />\
    <img src="styles/legend/sungai_0_0.png" /> sungai<br />\
    <img src="styles/legend/sungai_0_1.png" /> <br />'
        });var format_DesaIndonesia_1 = new ol.format.GeoJSON();
var features_DesaIndonesia_1 = format_DesaIndonesia_1.readFeatures(json_DesaIndonesia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_1.addFeatures(features_DesaIndonesia_1);var lyr_DesaIndonesia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_1, 
                style: style_DesaIndonesia_1,
                title: '<img src="styles/legend/DesaIndonesia_1.png" /> DesaIndonesia'
            });var format_jalan_2 = new ol.format.GeoJSON();
var features_jalan_2 = format_jalan_2.readFeatures(json_jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_2.addFeatures(features_jalan_2);var lyr_jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_2, 
                style: style_jalan_2,
    title: 'jalan<br />\
    <img src="styles/legend/jalan_2_0.png" /> jalan lokal<br />\
    <img src="styles/legend/jalan_2_1.png" /> jalan utama<br />\
    <img src="styles/legend/jalan_2_2.png" /> <br />'
        });var format_SEIRASAU_3 = new ol.format.GeoJSON();
var features_SEIRASAU_3 = format_SEIRASAU_3.readFeatures(json_SEIRASAU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEIRASAU_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SEIRASAU_3.addFeatures(features_SEIRASAU_3);var lyr_SEIRASAU_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEIRASAU_3, 
                style: style_SEIRASAU_3,
                title: '<img src="styles/legend/SEIRASAU_3.png" /> SEI RASAU'
            });var format_rumah_4 = new ol.format.GeoJSON();
var features_rumah_4 = format_rumah_4.readFeatures(json_rumah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rumah_4.addFeatures(features_rumah_4);var lyr_rumah_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rumah_4, 
                style: style_rumah_4,
    title: 'rumah<br />\
    <img src="styles/legend/rumah_4_0.png" /> <br />\
    <img src="styles/legend/rumah_4_1.png" /> Kantor desa sei rasau<br />\
    <img src="styles/legend/rumah_4_2.png" /> rumah warga<br />\
    <img src="styles/legend/rumah_4_3.png" /> warga<br />\
    <img src="styles/legend/rumah_4_4.png" /> wargaL<br />\
    <img src="styles/legend/rumah_4_5.png" /> wargaLL<br />\
    <img src="styles/legend/rumah_4_6.png" /> warrga<br />'
        });

lyr_sungai_0.setVisible(true);lyr_DesaIndonesia_1.setVisible(true);lyr_jalan_2.setVisible(true);lyr_SEIRASAU_3.setVisible(true);lyr_rumah_4.setVisible(true);
var layersList = [lyr_sungai_0,lyr_DesaIndonesia_1,lyr_jalan_2,lyr_SEIRASAU_3,lyr_rumah_4];
lyr_sungai_0.set('fieldAliases', {'id': 'id', 'sungai': 'sungai', });
lyr_DesaIndonesia_1.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', });
lyr_jalan_2.set('fieldAliases', {'id': 'id', 'jalan': 'jalan', });
lyr_SEIRASAU_3.set('fieldAliases', {'NO': 'NO', 'EAST (E/X)': 'EAST (E/X)', 'SOUTH (S/Y)': 'SOUTH (S/Y)', 'NAMA TEMPAT': 'NAMA TEMPAT', 'KET': 'KET', });
lyr_rumah_4.set('fieldAliases', {'id': 'id', 'rumah': 'rumah', 'foto': 'foto', });
lyr_sungai_0.set('fieldImages', {'id': 'TextEdit', 'sungai': 'TextEdit', });
lyr_DesaIndonesia_1.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_jalan_2.set('fieldImages', {'id': 'TextEdit', 'jalan': 'TextEdit', });
lyr_SEIRASAU_3.set('fieldImages', {'NO': 'TextEdit', 'EAST (E/X)': 'TextEdit', 'SOUTH (S/Y)': 'TextEdit', 'NAMA TEMPAT': 'TextEdit', 'KET': 'TextEdit', });
lyr_rumah_4.set('fieldImages', {'id': 'TextEdit', 'rumah': 'TextEdit', 'foto': 'Photo', });
lyr_sungai_0.set('fieldLabels', {'id': 'no label', 'sungai': 'inline label', });
lyr_DesaIndonesia_1.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'LUAS': 'no label', 'MI_PRINX': 'no label', });
lyr_jalan_2.set('fieldLabels', {'id': 'no label', 'jalan': 'inline label', });
lyr_SEIRASAU_3.set('fieldLabels', {'NO': 'no label', 'EAST (E/X)': 'no label', 'SOUTH (S/Y)': 'no label', 'NAMA TEMPAT': 'no label', 'KET': 'no label', });
lyr_rumah_4.set('fieldLabels', {'id': 'no label', 'rumah': 'inline label', 'foto': 'no label', });
lyr_rumah_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});