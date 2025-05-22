ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1918486.429202, 5551587.791820, 1966377.731860, 5597344.180986]);
var wms_layers = [];

var lyr_OpenStreet_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OpenStreet<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OpenStreet_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1919511.297584, 5554908.655771, 1965122.062020, 5594484.919951]
        })
    });
var lyr_NRG_SpongyMoth_BanjaLuka_22072013_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NRG_SpongyMoth_BanjaLuka_22072013<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NRG_SpongyMoth_BanjaLuka_22072013_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1919511.297584, 5554908.655771, 1965122.062020, 5594484.919951]
        })
    });
var lyr_RGB_SpongyMoth_BanjaLuka_22072013_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RGB_SpongyMoth_BanjaLuka_22072013<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RGB_SpongyMoth_BanjaLuka_22072013_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1919511.297584, 5554908.655771, 1965122.062020, 5594484.919951]
        })
    });
var lyr_NRG_SpongyMoth_BanjaLuka_20062013_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NRG_SpongyMoth_BanjaLuka_20062013<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NRG_SpongyMoth_BanjaLuka_20062013_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1919511.297584, 5554908.655771, 1965122.062020, 5594484.919951]
        })
    });
var lyr_RGB_SpongyMoth_BanjaLuka_20062013_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RGB_SpongyMoth_BanjaLuka_20062013<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RGB_SpongyMoth_BanjaLuka_20062013_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1919511.297584, 5554908.655771, 1965122.062020, 5594484.919951]
        })
    });
var lyr_NRG_SpongyMoth_BanjaLuka_19052013_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NRG_SpongyMoth_BanjaLuka_19052013<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NRG_SpongyMoth_BanjaLuka_19052013_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1919511.297584, 5554908.655771, 1965122.062020, 5594484.919951]
        })
    });
var lyr_RGB_SpongyMoth_BanjaLuka_19052013_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RGB_SpongyMoth_BanjaLuka_19052013<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RGB_SpongyMoth_BanjaLuka_19052013_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1919511.297584, 5554908.655771, 1965122.062020, 5594484.919951]
        })
    });
var group_Landsat8imagesbeforedefoliation19May2013 = new ol.layer.Group({
                                layers: [lyr_NRG_SpongyMoth_BanjaLuka_19052013_5,lyr_RGB_SpongyMoth_BanjaLuka_19052013_6,],
                                fold: "open",
                                title: 'Landsat-8 images before defoliation 19 May, 2013'});
var group_Landsat8imagesofdefoliation20June2013 = new ol.layer.Group({
                                layers: [lyr_NRG_SpongyMoth_BanjaLuka_20062013_3,lyr_RGB_SpongyMoth_BanjaLuka_20062013_4,],
                                fold: "open",
                                title: 'Landsat-8 images of defoliation 20 June, 2013'});
var group_Landsat8imagesofrefoliation22July2013 = new ol.layer.Group({
                                layers: [lyr_NRG_SpongyMoth_BanjaLuka_22072013_1,lyr_RGB_SpongyMoth_BanjaLuka_22072013_2,],
                                fold: "open",
                                title: 'Landsat-8 images of refoliation 22 July, 2013'});

lyr_OpenStreet_0.setVisible(true);lyr_NRG_SpongyMoth_BanjaLuka_22072013_1.setVisible(true);lyr_RGB_SpongyMoth_BanjaLuka_22072013_2.setVisible(true);lyr_NRG_SpongyMoth_BanjaLuka_20062013_3.setVisible(true);lyr_RGB_SpongyMoth_BanjaLuka_20062013_4.setVisible(true);lyr_NRG_SpongyMoth_BanjaLuka_19052013_5.setVisible(true);lyr_RGB_SpongyMoth_BanjaLuka_19052013_6.setVisible(true);
var layersList = [lyr_OpenStreet_0,group_Landsat8imagesofrefoliation22July2013,group_Landsat8imagesofdefoliation20June2013,group_Landsat8imagesbeforedefoliation19May2013];
