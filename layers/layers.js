var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_COMUNAScopiar_1 = new ol.format.GeoJSON();
var features_COMUNAScopiar_1 = format_COMUNAScopiar_1.readFeatures(json_COMUNAScopiar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNAScopiar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNAScopiar_1.addFeatures(features_COMUNAScopiar_1);
var lyr_COMUNAScopiar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMUNAScopiar_1, 
                style: style_COMUNAScopiar_1,
                popuplayertitle: 'COMUNAS copiar',
                interactive: false,
    title: 'COMUNAS copiar<br />\
    <img src="styles/legend/COMUNAScopiar_1_0.png" /> Concepción<br />\
    <img src="styles/legend/COMUNAScopiar_1_1.png" /> Coronel<br />\
    <img src="styles/legend/COMUNAScopiar_1_2.png" /> Hualpén<br />\
    <img src="styles/legend/COMUNAScopiar_1_3.png" /> Lota<br />\
    <img src="styles/legend/COMUNAScopiar_1_4.png" /> Penco<br />\
    <img src="styles/legend/COMUNAScopiar_1_5.png" /> San Pedro de la Paz<br />\
    <img src="styles/legend/COMUNAScopiar_1_6.png" /> Talcahuano<br />\
    <img src="styles/legend/COMUNAScopiar_1_7.png" /> <br />' });
var format_POLIGONOSBARRIOSSELECCIONADOS_2 = new ol.format.GeoJSON();
var features_POLIGONOSBARRIOSSELECCIONADOS_2 = format_POLIGONOSBARRIOSSELECCIONADOS_2.readFeatures(json_POLIGONOSBARRIOSSELECCIONADOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONOSBARRIOSSELECCIONADOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONOSBARRIOSSELECCIONADOS_2.addFeatures(features_POLIGONOSBARRIOSSELECCIONADOS_2);
var lyr_POLIGONOSBARRIOSSELECCIONADOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIGONOSBARRIOSSELECCIONADOS_2, 
                style: style_POLIGONOSBARRIOSSELECCIONADOS_2,
                popuplayertitle: 'POLIGONOS BARRIOS SELECCIONADOS',
                interactive: false,
                title: '<img src="styles/legend/POLIGONOSBARRIOSSELECCIONADOS_2.png" /> POLIGONOS BARRIOS SELECCIONADOS'
            });
var format_ATRACTIVOSTURISTICOSPUNTO_3 = new ol.format.GeoJSON();
var features_ATRACTIVOSTURISTICOSPUNTO_3 = format_ATRACTIVOSTURISTICOSPUNTO_3.readFeatures(json_ATRACTIVOSTURISTICOSPUNTO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATRACTIVOSTURISTICOSPUNTO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATRACTIVOSTURISTICOSPUNTO_3.addFeatures(features_ATRACTIVOSTURISTICOSPUNTO_3);
var lyr_ATRACTIVOSTURISTICOSPUNTO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATRACTIVOSTURISTICOSPUNTO_3, 
                style: style_ATRACTIVOSTURISTICOSPUNTO_3,
                popuplayertitle: 'ATRACTIVOS TURISTICOS PUNTO',
                interactive: true,
    title: 'ATRACTIVOS TURISTICOS PUNTO<br />\
    <img src="styles/legend/ATRACTIVOSTURISTICOSPUNTO_3_0.png" /> <br />\
    <img src="styles/legend/ATRACTIVOSTURISTICOSPUNTO_3_1.png" /> CENTRO COMERCIAL<br />\
    <img src="styles/legend/ATRACTIVOSTURISTICOSPUNTO_3_2.png" /> ESTABLECIMIENTO EDUCACIONAL<br />\
    <img src="styles/legend/ATRACTIVOSTURISTICOSPUNTO_3_3.png" /> ESTADIO/CANCHA<br />\
    <img src="styles/legend/ATRACTIVOSTURISTICOSPUNTO_3_4.png" /> HOTEL<br />\
    <img src="styles/legend/ATRACTIVOSTURISTICOSPUNTO_3_5.png" /> MUNICIPALIDAD<br />\
    <img src="styles/legend/ATRACTIVOSTURISTICOSPUNTO_3_6.png" /> MUSEO<br />\
    <img src="styles/legend/ATRACTIVOSTURISTICOSPUNTO_3_7.png" /> PLAZA<br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_COMUNAScopiar_1.setVisible(true);lyr_POLIGONOSBARRIOSSELECCIONADOS_2.setVisible(true);lyr_ATRACTIVOSTURISTICOSPUNTO_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_COMUNAScopiar_1,lyr_POLIGONOSBARRIOSSELECCIONADOS_2,lyr_ATRACTIVOSTURISTICOSPUNTO_3];
lyr_COMUNAScopiar_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_POLIGONOSBARRIOSSELECCIONADOS_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_ATRACTIVOSTURISTICOSPUNTO_3.set('fieldAliases', {'id': 'id', 'COMUNA': 'COMUNA', 'BARRIO': 'BARRIO', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'COORDENADA': 'COORDENADA', 'VIDEO': 'VIDEO', });
lyr_COMUNAScopiar_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_POLIGONOSBARRIOSSELECCIONADOS_2.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_ATRACTIVOSTURISTICOSPUNTO_3.set('fieldImages', {'id': 'TextEdit', 'COMUNA': 'TextEdit', 'BARRIO': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'COORDENADA': 'TextEdit', 'VIDEO': 'TextEdit', });
lyr_COMUNAScopiar_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_POLIGONOSBARRIOSSELECCIONADOS_2.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_ATRACTIVOSTURISTICOSPUNTO_3.set('fieldLabels', {'id': 'no label', 'COMUNA': 'inline label - always visible', 'BARRIO': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'NOMBRE': 'inline label - always visible', 'COORDENADA': 'inline label - always visible', 'VIDEO': 'inline label - always visible', });
lyr_ATRACTIVOSTURISTICOSPUNTO_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});